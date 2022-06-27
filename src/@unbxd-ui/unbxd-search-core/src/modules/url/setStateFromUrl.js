export default function(url = null){
    let loadFromUrl = false;
    const urlParts = this.getQueryParams(url);
    const {
        pagination,
        searchQueryParam,
        browseQueryParam,
        productType
    } = this.options;
    let queryParam = searchQueryParam;
    if (productType !== 'SEARCH') {
        queryParam = browseQueryParam;
        urlParts[queryParam] = this.getCategoryId(); 
    }
    if(typeof urlParts === 'object' && urlParts[queryParam] ) {
        const {
            q,
            filter,
            sort,
            start
        } = urlParts;
        loadFromUrl = true
        if(this.state.userInput !== q){
            this.state.userInput = decodeURIComponent(q);
        }
        const facets = this.getFilterFromParams(filter);
        this.state.rangeFacet = facets.rangeFacet;
        this.state.selectedFacets = facets.selectedFilters;
        this.state.selectedSort = (sort)?decodeURIComponent(sort):"";
        this.state.startPageNo = start? start:0;
        this.state.isBack = false;
        if(pagination.type !== "FIXED_PAGINATION") {
            this.state.startPageNo = 0;
        }
        this.state.pageSize = urlParts.rows ? Number(urlParts.rows): this.options.pageSize;
        this.state.categoryFilter = this.getCategoryFilterFromParams(urlParts);
        if(loadFromUrl) {
            this.getResults()
        }
    }
};
