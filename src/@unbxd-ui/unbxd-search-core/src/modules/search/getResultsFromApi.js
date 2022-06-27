import {
    libEvents
} from './../../constants';

/**
* @description 
<pre>
    <code>
        getResults()
    </code>
    <code>
        optional : getResults('shirt')
    </code>
</pre>
* to fetch the results from api
* It can accept search term as parameter
* @method getResults
*/

export default  function(query = "", newUrl=true) {
    const {
        userInput,
        isHistory,
        isBack
    } = this.state;
    const newVal = (query === "") ? encodeURIComponent(userInput) : query;
    this.state.userInput = newVal;
    
    this.state.currentUrl =this.getNewUrlState();
    if(this.state.isLoading) {
        return false;
    }

    this.state.isLoading = true;
    const self = this;
    const {
        productType,
        hashMode,
        updateUrls,
        variants
    } = this.options;
    if(!hashMode && updateUrls && !isHistory && !isBack) {
        this.state.isBack = false;
        const q = this.state.currentUrl.split(`${productType.toLocaleLowerCase()}?`)[1];
        if(decodeURIComponent(location.search) !== `?${decodeURIComponent(q)}`){
            this.setUrl(true);
            return false;
        }
    }
    const {
        spellCheck
    } = this.options;
    this.callBack(this, libEvents.beforeApiCall);
    const fetchPromise = fetch(this.state.currentUrl);
    const errorHandler = (error) => {
        this.state.isLoading = false;
        this.state.userInput = decodeURIComponent(newVal);
        if(error){
            this.callBack(self,error);
        }
    }
    fetchPromise.then(response => {
        this.state.requestId = response && response.headers ? response.headers.get('X-Request-Id'):'';
        return response.json();
    }).then(respJson => {
        this.state.isLoading = false;
        this.state.userInput = decodeURIComponent(newVal);
        if(respJson && !respJson.error) {
            if(variants && variants.enabled) {
                respJson = this.processVariantMap(respJson);
            }
            this.state.responseObj = respJson;
            const didYouMean = this.getDidYouMeanFromResponse();
            if(didYouMean) {
                this.state.didYouMean = didYouMean;
                this.state.noResultQuery = this.state.userInput;
            }
            const{
                facets,
                response
            } = respJson;
            if(facets) {
                const facetsList = this.getFacets();
                const newListFacet = this.modifyFacetsList(facetsList)
                respJson.facets =  {
                    ...facets,
                    text: {
                        list:newListFacet
                    }
                }
            }
            if(response) {
                const {
                    products
                } = response;
                const{
                    pagination
                } = this.options;
                if(pagination && pagination.type !== "FIXED_SCROLL"){
                    this.state.products = this.state.products.concat(products);
                } else {
                    this.state.products = products;
                }

            }
            this.state.responseObj = respJson;
            this.setSort();
            //this.setStateFromData();
            if(updateUrls && isHistory && !isBack){
                this.state.isBack = false;
                this.setUrl(false);
            }
            this.callBack(self,libEvents.afterApiCall);
        } else {
            errorHandler(libEvents.fetchError)
        }
    }).catch(error => {
        errorHandler(libEvents.fetchError)
    });
};
