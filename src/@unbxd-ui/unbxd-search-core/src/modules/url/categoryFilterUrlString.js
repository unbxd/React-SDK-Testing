export default function() {
    const {
        categoryFilter
    } = this.state;
    let str = "";
    const keys = Object.keys(categoryFilter);
    const doubleQuotes = "%22";
    keys.forEach((key, index) => {
        const selectedCategory = this.getAFacetByName(key)[0];
        const breadcrumbList = this.getBreadCrumbsList(key);
        let selectedVal = null;
        if (selectedCategory) {
            let categoryFilterKey = "";
            const {
                filterField,
                values
            } = selectedCategory;
            if (filterField) {
                categoryFilterKey = selectedCategory;
            }
            const valStr = categoryFilter[key].map((item, index) => {
                selectedVal = values.find(val => this.cleanFacetValue(encodeURIComponent(val.name)) === this.cleanFacetValue(item));
                if(breadcrumbList) {
                    const selecteditem = breadcrumbList.find(crumb => crumb.value === item);
                    if(selecteditem) {
                        selectedVal = {
                            name:selecteditem.value
                        };
                    }
                }
                let it = item;
                if(selectedVal) {
                    it = this.encodeCategoryFacetValue(selectedVal.name).split(doubleQuotes).join("");
                }
                if (index > 0) {
                    it = `>${this.encodeCategoryFacetValue(item).split(doubleQuotes).join("")}`;
                } else {
                    it = this.encodeCategoryFacetValue(item).split(doubleQuotes).join("");
                }
                return it;
            })
            //category-filter specific code
            if(filterField === "categoryPath"){
                str += `&category-filter=${valStr.join("")}`;
                //category-filter specific code
            } else {
                
                str += `&filter=${filterField}:"${valStr.join("")}"`;
            }

        } else {
            //category-filter specific code
            if(categoryFilter && categoryFilter["categoryPath"]){
                let vals = ``;
                categoryFilter.categoryPath.forEach((item,i)=> {
                    const valArr = item.split(">")
                    valArr.forEach((item,i)=> {
                        const dVal = this.encodeCategoryFacetValue(item).split("%22").join("");
                        if(vals !== ``) {
                            vals += `>${dVal}`
                        } else {
                            vals = dVal
                        }
                    })
                })
                str += `&category-filter=${vals}`;
            }
        }
    });
    return str;
};
