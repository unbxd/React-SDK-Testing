export default function(selectedFacet) {
    const {
        selectedFacetId,
        facetData
    } = selectedFacet;
    return facetData.values.find((facet) => {
        const {
            dataId
        } = facet;
        return dataId === selectedFacetId
    })
};
