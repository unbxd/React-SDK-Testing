
/**
* @description 
<pre>
    <code>
        getSelectedMultilevelFacet()
    </code>
</pre>
* to get all the selected multilevel facets
* @method getSelectedMultilevelFacet
*/
export default function() {
    const {
        categoryFilter
    } = this.state;
    if (categoryFilter) {
        const categories = Object.keys(categoryFilter);
        return categories
    }
    return null;
};
