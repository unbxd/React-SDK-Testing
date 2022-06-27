
/**
* @description 
<pre>
    <code>
        isCategoryFacet(facetName)
    </code>
</pre>
* to know whether facet is category Facet or not
* @param {string} name eg:facetName
* @method isCategoryFacet
*/
export default function(facetName) {
    const facetItem = this.getAFacetByName(facetName)[0];
    if (facetItem) {
        const {
            facetType
        } = facetItem
        if (facetType === "category") {
            return true
        }
        return false
    }
    return false
};
