const options = {
    siteKey:'api key',
    apiKey:'site key',
    isFlag:true,
    searchEndPoint:'https://search.unbxd.io/',
    productType:'SEARCH',
    searchQueryParam:'q',
    browseQueryParam:'p',
    searchPath:"",
    productAttributes: ['title'],
    defaultFilters:null,
    spellCheck:{
        enabled:false
    },
    pageSize:5,
    startPageNo:0,
    facetMultiSelect: true,
    updateUrls: true,
    variants:undefined,
    extraParams: {},
    facetMultilevel: true,
    facetDepth: 6,
    showSwatches: true,
    swatchMap: {},
    onEvent: () => { },
    getCategoryId:()=>{
        return encodeURIComponent(window.UnbxdAnalyticsConf["page"]) || decodeURIComponent(location.pathname.split('category-path')[1].split('/').pop())
    },
    setCategoryId:(param, self)=>{
        //const page = self.setCategoryFilter(param)[param.parent].join(">");
        const {
            level,
            parent,
            name,
            action
        } = param;
        let page = ``;
        let fPath = ``;
        let pathArr = [];
        const l = Number(level);
        const breadCrumbs = self.getBreadCrumbsList();
        breadCrumbs.forEach((element,i) => {
            const {
                filterField,
                value
            } = element;
            fPath = filterField;
            if(l > i) {
                pathArr.push(value);
            }
        });
        if(l>breadCrumbs.length) {
            pathArr.push(name);  
        }
        page = pathArr.join(">");
        if(window.UnbxdAnalyticsConf) {
            window.UnbxdAnalyticsConf.page = page;
        }
    },
    applyMultipleFilters:false,
    hashMode:false,
    pagination:{
        type:"INFINITE_SCROLL"
    },
    onQueryRedirect:(self, redirect)=>{
        if(redirect) {
            const {
                value,
                type
            } = redirect;
            if(type === "url") {
                location.href =  value;                                                           
            }
            return false;
        }
    }
}

export default options;
