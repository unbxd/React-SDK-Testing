/**
* @description 
* to get the applied filters from api response
* @method getFilterFromParams
*/
export default function(filters = []) {
    const self = this;
    let selectedFilters = {};
    let rangeFacet = {};
    if(typeof filters === "string") {
        filters = Array(filters)
    }
    filters.forEach((filter,index) => {
        const filterStrArr = filter.split("%20OR%20");
        filterStrArr.forEach((item,index) => {
            const arr = item.split(/:(.+)/);
            if(arr.length === 3) {
                let rVal = decodeURIComponent(arr[1]);
                rVal = rVal.replace(/(^")|("$)/g, '').replace(/\"{2,}/g, '"').replace(/\\\"/g, '"').replace(/(^\[)|(\]$)/g, '');
                const isRange = arr[1].indexOf("TO") > 0 ? true : false;
                if(isRange) { 
                    const range = rVal.split(" TO ");
                    const fName = arr[0];
                    const val = `[${Number(range[0])} TO ${Number(range[1])}]`
                    if(rangeFacet[fName]) {
                        rangeFacet[fName].push(val)
                    } else{
                        rangeFacet[fName] = [val]
                    }
                    //"["+start+" TO "+ end +"]"
                } else {
                    let fName = arr[0];
                    let fVal = arr[1];
                    let cleanedFacetValue = self.cleanEncodedFacetValue(fVal);
                    const decodedFval = self.decodeFacetValue(cleanedFacetValue)
                    const facetInfo = self.getFacetByValue(fName, decodedFval);
                    const {
                        actualFound
                    } = facetInfo;
                    if(actualFound) {
                        const {
                            facetName,
                            selectedvalue
                        } = facetInfo;
                        if(selectedFilters[facetName]) {
                            selectedFilters[facetName].push(selectedvalue);
                        } else {
                            selectedFilters[facetName] = Array(selectedvalue);
                        }
                    } else {
                        const {
                            facetName,
                            selectedvalue
                        } = facetInfo;
                        const {
                            name
                        } = selectedvalue;
                        const f = {
                            name :name,
                            dataId :cleanedFacetValue,
                            count:0
                        }
                        if(selectedFilters[facetName]) {
                            selectedFilters[facetName].push(f);
                        } else {
                            selectedFilters[facetName] = Array(f);
                        }

                    }

                }
            }
        })

    })
    return {
        selectedFilters,
        rangeFacet
    };
};
