export default function(){
    const urlParts = this.getQueryParams();
    let qState = {};
    const {
        pageSize
    } = this.options.pagesize
    if(typeof urlParts === 'object') {
        const {
            q,
            filter,
            sort,
            start,
            rows = pageSize
        } = urlParts;
        if(this.state.userInput !== q){
            qState.userInput = q;
        }
        const facets = this.getFilterFromParams(filter);
        qState.rangeFacet = facets.rangeFacet;
        qState.selectedFacets = facets.selectedFilters;
        qState.selectedSort = (sort)?sort:"";
        qState.startPageNo = start? start:0;
        qState.pageSize = Number(rows);
        qState.categoryFilter = this.getCategoryFilterFromParams(urlParts);
    }
    return qState;
};

