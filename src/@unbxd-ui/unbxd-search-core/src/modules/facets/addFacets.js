
/**
* @description 
<pre>
    <code>
        addFacets({
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
export default function (facets) {
    const {
        selectedFacets
    } = this.state;


    Object.keys(facets).map(facetName => {

        const oldFacetValues = selectedFacets[facetName] || [];
        selectedFacets[facetName] = [...oldFacetValues, ...facets[facetName]]

        return;
    }
    );
};
