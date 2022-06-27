export default function(value) {
    const multilevelFacets = this.getBucketedFacets();
    let selectedValue = null
    if(multilevelFacets) {
        for (let i = 0; i < multilevelFacets.length; i++) {
            const current  = multilevelFacets[i];
            const {
                values
            } = current;
            for (let j = 0; j < values.length; j++) {
                const {
                    dataId,
                    name
                } = values[j];
                if(dataId === value) {
                    selectedValue = name;
                    break;
                }

            }

        }
    }

    return selectedValue;
};