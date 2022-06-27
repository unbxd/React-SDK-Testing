/**
* @description 
<pre>
    <code>
        setRangeFacet({
            "start": 0,
            "end": "100",
            "name": "price_facet"
            "applyMultiple":false
        })
    </code>
</pre>
* to set a range filter in state
* accepts an Object with 3  parameters
* @param {number} start eg:0 
* @param {number} end eg:100
* @param {string} facet name eg:"price"
* @param {boolean} applyMultiple eg:"price"
* @method setRangeFacet
*/
export default function(rangeFacet){
    const {
        start,
        end,
        facetName,
        applyMultiple
    } = rangeFacet;
    const rangeVal = `[${start} TO ${end}]`;
    if(applyMultiple) {
        if(!this.state.rangeFacet[facetName]){
            this.state.rangeFacet[facetName] = [rangeVal]
        } else {
            const id = this.state.rangeFacet[facetName].indexOf(rangeVal)
            if( id<0){
                this.state.rangeFacet[facetName].push(rangeVal)
            } else {
                this.state.rangeFacet[facetName].splice(id,1);
            }
        }
    } else {
        this.state.rangeFacet[facetName] = [rangeVal];
    }
    this.callBack(self,'added_facet');
};
