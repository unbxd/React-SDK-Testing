
/**
* @description 
<pre>
    <code>
        updateFacets({
            "selectedFacetName": "v_unbxd_parentcolours_uFilter",
            "selectedFacetId": "1",
            "facetData": {
                "facetName": "v_unbxd_parentcolours_uFilter",
                "filterField": "v_unbxd_parentcolours_uFilter",
                "values": [
                    {
                        "name": "white",
                        "count": 143,
                        "dataId": 1
                    },
                    {
                        "name": "black",
                        "count": 133,
                        "dataId": 3
                    },
                    {
                        "name": "beige",
                        "count": 70,
                        "dataId": 5
                    }
                ],
            "displayName": "Colour",
            "position": 1
        }
    })
    </code>
</pre>
* to set a filter value
* accepts an Object with 3  parameters
* @param {string} selectedFacetName eg: v_unbxd_parentcolours_uFilter 
* @param {string} selectedFacetId eg: '1'
* @param {object} facet facetData 
* @method updateFacets
*/
export default function(selectedFacet) {
    const {
        selectedFacets
    } = this.state;
    const {
        selectedFacetName
    } = selectedFacet;
    let selectedFacetId = "";
    let selectedFacetdataId = "";
    let selectedCount = 0;
    const selectedFacetVal = this.getSelectedFacetValue(selectedFacet);
    if(selectedFacetVal) {
        const {
            name,
            dataId,
            count
        } = selectedFacetVal;
        selectedFacetId = name;
        selectedFacetdataId = dataId;
        selectedCount = count;
    }
    if(this.isFacetAlreadyAdded(selectedFacetName,selectedFacetdataId)) {
        return false;
    }
    if(!selectedFacets[selectedFacetName]){
        selectedFacets[selectedFacetName] = [
            {
                name:selectedFacetId,
                dataId:selectedFacetdataId,
                count:selectedCount
            }
        ];
    } else {
        selectedFacets[selectedFacetName].push({
            name:selectedFacetId,
            dataId:selectedFacetdataId,
            count:selectedCount
        })
    }
    this.callBack(self,'added_facet');
    if(!this.options.applyMultipleFilters){
        this.setPageStart(0);
        this.getResults.bind(this)();
    }
};
