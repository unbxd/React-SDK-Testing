/**
* @description 
<pre>
    <code>
        getAllFacets()
    </code>
</pre>
* to get all the facets in an array.
* @method getAllFacets
*/

export default function() {
    const texts = this.getAllTextFacets();
    const ranges = this.getAllRangeFacets();
    const multiFacets = this.getAllCategory();
    let all = [...multiFacets, ...texts, ...ranges];
    return all.sort(this.sortFacets);
}
