/**
*  @description 
* will return breadcrumbs object if it is available. in following format.
*example:
   <pre>
        <code>
        {
            "filterField": "categoryPath",
            "values": [
                {
                "value": "Dress"
                }
            ],
            "child": {
                "filterField": "categoryPath",
                "values": [
                {
                    "value": "Short Sleeves"
                }
                ],
                "level": 2
            },
            "level": 1
        }
        </code>
    </pre>
    * @method getBreadCrumbs 
*/

export default function(categoryName) {
    const resp = this.getResponseObj();
    let breadCrumbs = [];
    if (resp && resp.facets && resp.facets.multilevel) {
        if (categoryName) {
            const multiFacets = resp.facets.multilevel.list;
            if (multiFacets) {
                multiFacets.forEach((item) => {
                    const {
                        filterField,
                        breadcrumb
                    } = item;
                    if (filterField === categoryName) {
                        breadCrumbs = breadcrumb;
                    }
                })
            } else {
                const crumb = resp.facets.multilevel.breadcrumb;
                breadCrumbs =  crumb ? crumb : null
            }
        }
    }
    return breadCrumbs;
};
