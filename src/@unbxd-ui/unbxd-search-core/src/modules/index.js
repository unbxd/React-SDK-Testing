import urlMethods from './url';
import setPaginationMethods from './pagination';
import setSearchMethods from './search';
import setSwatchMethods from './swatches';
import setFacetMethods from './facets';
import setBreadCrumbs from './breadcrumbs';
import setSortMethods from './sort';
import setDidYouMeanMethods from './didyoumean';
import setBannerMethods from './banner'

const changeInput = function(value, evt) {
    this.state.userInput = value;
    this.callBack(value,evt)
};
const resetFacets = function(){
    this.state.selectedFacets = {};
    this.state.rangeFacet = {};
    this.state.categoryFilter = {};
    this.state.breadcrumbs = {};

}
const resetAll = function(){
    this.resetFacets();
    this.state.didYouMean = null;
    this.state.startPageNo = 0;
    this.state.selectedSort = '';
    this.state.responseObj = null;
    this.state.userInput = '';
    this.state.pageSize = this.options.pageSize;

}
const setMethods = (UnbxdSearch) => {
    const {
        prototype
    } = UnbxdSearch;
    prototype.changeInput = changeInput;
    prototype.resetFacets = resetFacets;
    prototype.resetAll = resetAll;
    urlMethods(prototype);
    setPaginationMethods(prototype);
    setSearchMethods(prototype);
    setSwatchMethods(prototype);
    setFacetMethods(prototype);
    setBreadCrumbs(prototype);
    setSortMethods(prototype);
    setDidYouMeanMethods(prototype);
    setBannerMethods(prototype);
}
export default setMethods;