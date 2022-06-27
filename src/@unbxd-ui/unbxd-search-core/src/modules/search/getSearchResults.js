/**
* @description 
<pre>
    <code>
        getSearchResults()
    </code>
</pre>
* to get the loaded results from state
* @method getSearchResults
*/
export default function() {
    const responseObj = this.getResponseObj();
    if(responseObj) {
        const {
            response
        } = responseObj;
        return response || null
    } else {
        return null
    }
};
