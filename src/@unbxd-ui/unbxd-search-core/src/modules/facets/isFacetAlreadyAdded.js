/**
* @description 
<pre>
    <code>
        isFacetAlreadyAdded(facetName, value)
    </code>
</pre>
* to know whether facet is already seleted or not
* @param {string} name eg:facetName
* @param {value} filter value eg:xs
* @method isFacetAlreadyAdded
*/
export default function(facetName, value) {
    const selectedFacets = this.getSelectedFacets();
    const facet = selectedFacets[facetName];
    let isAdded = false
    if(facet) {
        facet.forEach(item => {
            const {
                dataId
            } = item;
            if(dataId === value) {
                isAdded = true;
                return false;
            }
        })
    }
    return isAdded
};
