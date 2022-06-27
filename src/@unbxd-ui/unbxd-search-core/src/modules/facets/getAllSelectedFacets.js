export default function() {
    const multiLevels = this.getSelectedBucketedFacet();
    const ranges = this.getSelectedRanges();
    const texts = this.getSelectedFacets();
    return Object.assign({}, multiLevels, ranges, texts);
}
