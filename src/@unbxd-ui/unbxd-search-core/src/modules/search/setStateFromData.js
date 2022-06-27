export default function() {

    const searchParams = this.getSearchQueryParams();
    const {
        q,
        filter
    } = searchParams;
    this.state.userInput = q;
    let filterArr = [];
    const replaceStr = "__";
    const colun = ":";
    if(filter) {
        if(Array.isArray(filter)) {
            filter.forEach((item, i) => {
                let modItem = item.replaceAll(colun,replaceStr);
                modItem = encodeURIComponent(modItem).replaceAll(replaceStr,colun)
                filterArr.push(modItem);
            })
        } else {
            let modItem = filter.replaceAll(colun,replaceStr);
            modItem = encodeURIComponent(modItem).replaceAll(replaceStr,colun)
            filterArr = [modItem];
        }
        searchParams.filter = filterArr;

    }
    const facets = this.getFilterFromParams(filterArr);

    this.state.rangeFacet = facets.rangeFacet;
    const {
        selectedFilters
    } = facets;
    let categoryFilterName = null;
    if (selectedFilters) {
        const facetKeys = Object.keys(selectedFilters);
        facetKeys.forEach((item) => {
            if (this.isCategoryFacet(item)) {
                categoryFilterName = item;
                const categoryVal = selectedFilters[item][0].dataId;
                this.state.categoryFilter[categoryFilterName] = categoryVal.split(">");
                if (this.state.selectedFacets[categoryFilterName]) {
                    delete this.state.selectedFacets[categoryFilterName];
                }
            } else {
                this.state.selectedFacets[item] = selectedFilters[item];
            }
        })
    } else {
        this.state.selectedFacets = {};
    }
    const categoryFiltersL = Object.keys(this.state.categoryFilter).length;
    if (categoryFiltersL === 0) {
        this.state.categoryFilter = this.getCategoryFilterFromParams(searchParams);
    }
    this.state.breadcrumbs = this.getBreadCrumbs(categoryFilterName)
}
