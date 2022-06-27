/**
* @description 
* to get the Range facets from the api response
* @method getRangeFacets
*/
export default function() {
    const responseObj = this.getResponseObj();
    if(responseObj) {
        const {
            facets
        } = responseObj;
        if(facets && facets.range && facets.range.list){
            return facets.range.list
        } else{
            return []
        }
    }
    return [];
};
