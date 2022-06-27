const processRangeFacet = (facets) => {
    const facetList = [];
    const modifiedFacets = facets || [];
    modifiedFacets.forEach((facet) => {
        const {
            values: { counts, gap },
        } = facet;
        const values = [];
        let valuesHolder = [];
        for (let i = 0; i < counts.length; i = i + 2) {
            const valLabel = Number(counts[i]);
            // facet value object
            const valObject = {
                name: valLabel,
                count: counts[i + 1],
                dataId: valLabel,
            };

            // push facet object into a temporary holder
            valuesHolder.push(valObject);
            if (valuesHolder.length >= 2) {
                // get from and end values from the holder
                const [from, end] = valuesHolder;
                values.push({ from, end });
                // remove the first value from the holder
                valuesHolder.shift();
                // use the first value as from value in the next iteration
            }
        }

        if (valuesHolder.length === 1) {
            const [from] = valuesHolder;
            // formulate an end value using gap
            const valLabel = from.dataId + gap;
            const end = {
                name: valLabel,
                count: 0,
                dataId: valLabel,
            };
            values.push({ from, end });
        }

        // pick up start and end values from the parsed array.
        const startVal = values[0]['from']['dataId'];
        const endVal = values[values.length - 1]['end']['dataId'];
        facet.start = startVal;
        facet.end = endVal;
        facet.max = endVal;
        facet.gap = gap || 1;
        facet.min = startVal;
        facet.values = values;
        facetList.push({ ...facet, values });
    });
    return facetList;
};

export default processRangeFacet;
