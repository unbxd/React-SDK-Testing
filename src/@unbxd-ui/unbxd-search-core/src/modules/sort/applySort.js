/**
* @description 
<pre>
    <code>
        applySort("price desc")
    </code>
</pre>
* to apply the sort
* @param {string} sortItem eg: "price asc"
* @method applySort
*/
export default function(sortItem) {
    this.setSort(sortItem);
    this.setPageStart(0);
    this.getResults.bind(this)();
}