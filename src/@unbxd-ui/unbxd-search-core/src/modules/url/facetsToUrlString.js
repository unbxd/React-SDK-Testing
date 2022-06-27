
export default function() {
    let facetUrl = ``;
    const { selectedFacets } = this.state;
    const defaultFilters = this.options.defaultFilters || {};
    const keys = Object.keys(selectedFacets);
    const doubleStr = "%22";
    keys.forEach((key) => {
        const facet = selectedFacets[key];
        facetUrl += `&filter=`;
        facet.forEach((item, index) => {
            let { name, dataId } = item;
            if (
                defaultFilters[key] !== undefined &&
                defaultFilters[key] === name
            ) {
                return;
            }
            name = `${doubleStr}${dataId}${doubleStr}`;
            if (index === 0) {
                facetUrl += `${key}:${name}`;
            } else {
                facetUrl += ` OR ${key}:${name}`;
            }
        });
    });
    return facetUrl;
}
