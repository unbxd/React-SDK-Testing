/**
* @description 
<pre>
    <code>
        setPageStart(12)
    </code>
</pre>
* to set the number of products in state
* @method pageSize(pageNo)
*/
export default function (nProducts) {
    if (typeof nProducts === 'number' && nProducts === parseInt(nProducts)) {
        this.state.pageSize = nProducts;
        this.state.startPageNo = 0;
    }

};
