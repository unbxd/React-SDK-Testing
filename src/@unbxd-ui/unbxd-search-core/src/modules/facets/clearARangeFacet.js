/**
*  @description 
* to clear a rangefacet
* @method clearARangeFacet
* @param {string} facetName eg:v_price 
*/
export default function(facetName) {
    let rangeFacet = this.state.rangeFacet;
    if(rangeFacet[facetName]) {
        delete rangeFacet[facetName]
    }
    this.state.rangeFacet = rangeFacet;
};
