/**
* @description 
<pre>
        <code>
        deleteCategoryFilter({
            "parent": "categoryPath",
            "level": "1",
            "name": "Top"
        })
        </code>
</pre>
* to clear all the filters under a facet
* accepts an Object with 3  parameters
* @param {string} parent eg:categoryPath 
* @param {string} level eg:1
* @param {string} name eg:"Top"
* @method deleteCategoryFilter
*/
export default function(facetName,valueId) {
    const selectedFacets = this.getSelectedFacets();
    if(valueId) {
       const selectedValues = selectedFacets[facetName];
       this.state.selectedFacets[facetName] = selectedValues.filter((facetObj)=>{ return facetObj.dataId != valueId});
    } else {
       delete this.state.selectedFacets[facetName]
    }
    return this.state.selectedFacets;
 };
 