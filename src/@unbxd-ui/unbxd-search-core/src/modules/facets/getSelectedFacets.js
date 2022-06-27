/**
* @description 
<pre>
    <code>
        getSelectedFacets()
    </code>
</pre>
* to get all the selected facets
* @method getSelectedFacets
*/
export default  function() {
    const {
        selectedFacets
    } = this.state;
    return selectedFacets;
};
