/**
* @description 
<pre>
    <code>
        getSelectedFacet(facetName)
    </code>
</pre>
* to get the whole facet information from facet name
* @param {string} name eg:facetName
* @method getSelectedFacet
*/
export default function(name) {
    const facets = this.getFacets();
    return facets.find((facet) =>{
        const {
            facetName
        } = facet;
        return (facetName === name) ? facet : null;
    })
};
