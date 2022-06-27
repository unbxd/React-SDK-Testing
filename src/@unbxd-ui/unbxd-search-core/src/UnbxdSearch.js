import options from './config';
import setMethods from "./modules/index";
import copyObject from "./utils/copyObject";


/**
 * Represents the Unbxd wrapper around the api.
 * @constructor
 */
class UnbxdSearch {
    constructor(props) {
        this.options = Object.assign({},options,props);
        this.state = {
            userInput : '',
            responseObj:null,
            selectedFacets:{},
            currentUrl:'',
            didYouMean:null,
            startPageNo: this.options.startPageNo || 0,
            isLoading: false,
            selectedSort:'',
            isUrlUpdated:false,
            rangeSliderList:[],
            rangeFacet:{},
            categoryFilter:{},
            breadcrumbs :{},
            urlState:'',
            noResultQuery:``,
            pageSize: this.options.pageSize || 12,
            urlLoad:false,
            isHistory:window.history,
            isBack:false,
            products:[],
            requestId:null
        }
        const {
            searchQueryParam,
            browseQueryParam,
            productType,
            getCategoryId,
            setCategoryId
        } = this.options;
        let queryString = '/search?';
        let queryParam = searchQueryParam;
        if(productType === 'CATEGORY') {
            queryString = '/category?'
            queryParam = browseQueryParam;
        }
        this.getCategoryId = getCategoryId;
        this.setCategoryId = setCategoryId;
        this.url = this.getBaseUrl()+queryString+queryParam+'=';
    }
    /**
     *  @returns the response {object}.
     */
    getResponseObj() {
        const {
            responseObj
        } = this.state;
        if(responseObj)  {
            return copyObject(responseObj)
        }
        return null;
    }
    setUrl(reload) {
        const {
            productType,
            hashMode,
            searchPath,
            onQueryRedirect
        } = this.options;
        const {
            urlLoad,
            isHistory,
            responseObj = {}
        } = this.state;
        const {
            redirect
        } = responseObj;
        if(typeof onQueryRedirect === "function") {
            onQueryRedirect(this, redirect);
        }
        const q = this.getNewUrlState(true).split(`${productType.toLocaleLowerCase()}?`)[1];
        this.state.urlState = q;
        const isPath = location.pathname.includes(searchPath);
        if(hashMode) {
            const newQ = `#${q}`;
            if(isPath && (newQ !== location.hash)) {
                location.hash = q;
            }
        } else {
            if(isHistory && !urlLoad && isPath){
                const newQ = `?${q}`;
                if(decodeURI(newQ) !== decodeURI(location.search)) {
                    window.history.pushState(q, null, newQ);
                    this.state.urlLoad = false;
                }
            }
            if(reload && isPath){
                location.search = q;
            }
        }
    }
    /**
     *  @returns the response {object}.
     */
    callBack(value, evt){
        const {
            onEvent
        } = this.options;
        onEvent(this, evt);
    }
}
setMethods(UnbxdSearch);
export default UnbxdSearch;
