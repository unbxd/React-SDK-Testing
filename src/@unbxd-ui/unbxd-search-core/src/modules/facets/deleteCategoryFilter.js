/**
* @description 
<pre>
        <code>
        deleteCategoryFilter({
            "parent": "categoryPath",
            "level": "1",
            "name": "Top"
        })
        </code>
</pre>
* to clear a category filter 
* accepts an Object with 3  parameters
* @param {string} parent eg:categoryPath 
* @param {string} level eg:1
* @param {string} name eg:"Top"
* @method deleteCategoryFilter
*/
export default function(action = {}) {
    let {
        parent = null,
        level = null,
        name = null
    } = action;
    if (level) {
        if (this.state.categoryFilter[parent]) {
            level = Number(level) - 1;
            if (level === 0) {
                delete this.state.categoryFilter[parent];
            } else {
                this.state.categoryFilter[parent].splice(level, 6);
            }
        } else {
            const checkCrumbs = this.getBreadCrumbsList(parent);
            if (level > 1) {
                const crumbs = [];
                this.state.categoryFilter[parent] = [];
                checkCrumbs.forEach((item, i) => {
                    if (i < (level - 1)) {
                        const {
                            value
                        } = item;
                        this.state.categoryFilter[parent].push(value);
                    }
                })
            }
        }
    }
};
