/**
* @description 
<pre>
    <code>
        setCategoryFilter({
            "parent": "categoryPath",
            "level": "1",
            "name": "Top"
        })
    </code>
</pre>
* to set a category filter in state
* accepts an Object with 3  parameters
* @param {string} parent eg:categoryPath 
* @param {string} level eg:1
* @param {string} name eg:"Top"
* @method setCategoryFilter
*/
export default function(action = {}) {
    let {
        parent = null,
        level = null,
        name = null
    } = action;
    let selectedValue = this.getCategoryFacetByValue(name);
    const list= this.getBreadCrumbsList(parent);
    level = Number(level);
    if (level && selectedValue) {
        if (this.state.categoryFilter[parent] && level <=list.length) {
            this.state.categoryFilter[parent][level - 1] = selectedValue;
            this.callBack(this, 'deletedcategoryFilter');
        } else {
            let crumbs = [];
            crumbs = list.map(item => {
                return item.value;
            });
            crumbs.push(selectedValue);
            this.state.categoryFilter[parent] = crumbs
            this.callBack(this, 'setCategoryFilter');
        }
    }
};

