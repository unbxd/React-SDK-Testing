/**
* @description 
<pre>
    <code>
        getAFacetByName()
    </code>
</pre>
* to return the facet details by the facet name.
* @param name
* @method getAFacetByName
*/
export default function(name) {
    const facets = this.getAllFacets();
    let selected = [];
    if (name) {
        selected = facets.filter(item => {
            const {
                facetName
            } = item;
            return facetName === name
        })
    }
    return selected;
}
