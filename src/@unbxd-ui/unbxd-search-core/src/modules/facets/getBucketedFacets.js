/**
* @description 
* to get the multilevel facets
* @method getBucketedFacets
*/
export default function() {
    const resp = this.getResponseObj();
    if(resp && resp.facets && resp.facets.multilevel) {
        const bucket = resp.facets.multilevel.bucket || resp.facets.multilevel.list || [];

        return this.modifyFacetsList(bucket);
    }
    return [];
};
