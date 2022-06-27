import processRangeFacet from './processRangeFacets';

export default function() {
    const rangeFacets = this.getRangeFacets();
    return processRangeFacet(rangeFacets);
};
