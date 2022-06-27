
/**
*  @description 
* will return breadcrumbs in array format.
*example:
    * @method getBreadCrumbsList
*/

export default function(categoryName){
  const data = this.getBreadCrumbs(categoryName);
  let arr = [];
  let temp = data;
  if(data) {
    for (let i = 0; i < this.options.facetDepth; i++) {
        if (temp.level) {
            const {
                level,
                values,
                filterField
            } = temp;
            values.forEach((val) => {
                arr.push({
                    level,
                    filterField,
                    value: val.value || val.name
                })
  
            })
        }
        if (temp.child) {
            temp = temp.child;
        } else {
            break;
        }
    }
  }
  return arr;
};

