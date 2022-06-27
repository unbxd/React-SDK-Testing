/**
* @description 
<pre>
    <code>
        setCategoryFilter({
            "parent": "categoryPath",
            "level": "1",
            "name": "Top"
        })
    </code>
</pre>
* to set a category filter in state
* accepts an Object with 3  parameters
* @param {string} parent eg:categoryPath 
* @param {string} level eg:1
* @param {string} name eg:"Top"
* @method setCategoryFilter
*/
export default function(categoryPathStr) {
  if (categoryPathStr.length) {
    const multilevelFieldName = this.options.extraParams['facet.multilevel'];
    this.state.categoryFilter[multilevelFieldName] = [categoryPathStr];
  }
}
