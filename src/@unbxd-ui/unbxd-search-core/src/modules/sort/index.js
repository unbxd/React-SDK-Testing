import applySort from './applySort';
import setSort from './setSort';

const getSelectedSort = function() {
    return this.state.selectedSort;
}

const setSortMethods = (prototype)=> {
    prototype = Object.assign(prototype,{
        applySort,
        getSelectedSort,
        setSort
    })
}
export {
    setSortMethods as default,
    applySort,
    getSelectedSort,
    setSort
};
