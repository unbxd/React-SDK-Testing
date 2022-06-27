export default function(facetName) {
    const {
        rangeFacet
    } = this.state;
    if(facetName) {
        return rangeFacet[facetName]
    }
    return rangeFacet;
}
