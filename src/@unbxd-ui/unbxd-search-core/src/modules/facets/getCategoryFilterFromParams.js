export default function(searchParams) {
    let currentFilters = searchParams["filter"];

    //category-filter specific code
    let categorypathFilter = [];
    if(searchParams["category-filter"]) {
        currentFilters = searchParams["category-filter"];
        categorypathFilter = currentFilters.split(">");
    }
    //category-filter specific code

    if(!currentFilters) {
        return {}
    }
    if(!Array.isArray(currentFilters)) {
        currentFilters = [currentFilters];
    }
    currentFilters  = this.getFilterFromParams(currentFilters).selectedFilters;
    let newObj = {};

    const facetKeys = Object.keys(currentFilters);
    facetKeys.forEach((item) => {
        if (this.isCategoryFacet(item)) {
            const categoryVal = currentFilters[item][0].dataId;
            newObj[item] = categoryVal.split(">");
        }
    })
    //category-filter specific code
    const categorypathFilterLength = categorypathFilter.length;
    if(categorypathFilterLength > 0) {
        if(categorypathFilter) {
            let catValues = [];
            categorypathFilter.forEach((item) => {
                const dVal = decodeURIComponent(item);
                const catValArr = dVal.split(">");
                catValArr.forEach((val) => {
                    catValues.push(decodeURIComponent(val))
                })
            })
            newObj['categoryPath'] = catValues;	
        }
    }
    //category-filter specific code
    return newObj;
};
