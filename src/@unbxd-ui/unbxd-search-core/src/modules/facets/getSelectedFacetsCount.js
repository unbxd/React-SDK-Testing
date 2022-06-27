export default function() {
    const facets = this.getAllSelectedFacets() || {};
    return Object.keys(facets).length;
}
