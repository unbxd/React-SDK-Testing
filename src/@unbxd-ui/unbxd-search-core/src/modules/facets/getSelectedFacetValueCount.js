export default function() {
    const selectedFacets = this.getAllSelectedFacets() || {};
    const facetArray = Object.keys(selectedFacets);
    let valueCount = 0;
    facetArray.forEach((item)=>{
        const facetObj = selectedFacets[item];
        if(Array.isArray(facetObj)) {
            valueCount += facetObj.length;
        }
    });
    return valueCount;
};
