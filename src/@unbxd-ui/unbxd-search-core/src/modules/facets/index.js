import getBucketedFacets from './getBucketedFacets';
import getFilterFromParams from './getFilterFromParams';
import getCategoryFilterFromParams from './getCategoryFilterFromParams';
import getRangeFacets from './getRangeFacets';
import getFacets from './getFacets';
import getSelectedFacets from './getSelectedFacets';
import getSelectedFacet from './getSelectedFacet';
import updateFacets from './updateFacets';
import applyFacets from './applyFacets';
import clearFacets from './clearFacets';
import addFacets from './addFacets';
import findSelectedFacet from './findSelectedFacet';
import deleteCategoryFilter from './deleteCategoryFilter';
import deleteFacet from './deleteFacet';
import getFacetByValue from './getFacetByValue';
import getSelectedFacetValue from './getSelectedFacetValue';
import setCategoryFilter from './setCategoryFilter';
import setDefaultCategoryFilter from './setDefaultCategoryFilter';
import setRangeFacet from './setRangeFacet';
import clearARangeFacet from './clearARangeFacet';
import deleteAFacet from './deleteAFacet';
import isFacetAlreadyAdded from './isFacetAlreadyAdded';
import getSelectedRanges from './getSelectedRanges';
import getRanges from './getRanges';
import isCategoryFacet from './isCategoryFacet.js';
import getAllFacets from "./getAllFacets.js";
import getAFacetByName from "./getAFacetByName.js";
import getSelectedMultilevelFacet from "./getSelectedMultilevelFacet.js";
import getAllSelectedFacets from "./getAllSelectedFacets.js";
import getSelectedFacetsCount from "./getSelectedFacetsCount";
import getSelectedFacetValueCount from "./getSelectedFacetValueCount";
import getCategoryFacetByValue from "./getCategoryFacetByValue";
import {
    modifyFacetsList,
    modifyValues,
    encodeFacetValue,
    decodeFacetValue,
    cleanFacetValue,
    encodeCategoryFacetValue,
    cleanEncodedFacetValue
} from "./utils.js"

const getSelectedBucketedFacet = function () {
    return this.state.categoryFilter
}
const applyRangeFacet = function () {
    this.setPageStart(0);
    this.getResults.bind(this)();
}
const sortFacets = function(a, b) {
    return (a.position > b.position) ? 1 : -1
};
const getAllTextFacets = function() {
    const text = this.getFacets();
    return text.map(item => {
        item.facetType = "text";
        return item;
    })
}
const getAllRangeFacets = function() {
    const ranges = this.getRanges();
    return ranges.map(item => {
        item.facetType = "range";
        return item;
    })
}
const getAllCategory = function() {
    const multiFacets = this.getBucketedFacets();
    return multiFacets.map(item => {
        item.facetType = "category";
        return item;
    })
}
const setFacetMethods = (prototype) => {
    prototype = Object.assign(prototype, {
        getBucketedFacets,
        getSelectedBucketedFacet,
        getFilterFromParams,
        getCategoryFilterFromParams,
        getRangeFacets,
        getFacets,
        getSelectedFacets,
        getSelectedFacet,
        updateFacets,
        applyFacets,
        clearFacets,
        addFacets,
        findSelectedFacet,
        deleteCategoryFilter,
        deleteFacet,
        getFacetByValue,
        getSelectedFacetValue,
        setCategoryFilter,
        setDefaultCategoryFilter,
        setRangeFacet,
        clearARangeFacet,
        deleteAFacet,
        applyRangeFacet,
        isFacetAlreadyAdded,
        getSelectedRanges,
        getRanges,
        sortFacets,
        isCategoryFacet,
        getAllFacets,
        getAFacetByName,
        getSelectedMultilevelFacet,
        getAllTextFacets,
        getAllRangeFacets,
        getAllCategory,
        getAllSelectedFacets,
        getSelectedFacetsCount,
        getSelectedFacetValueCount,
        encodeFacetValue,
        modifyFacetsList,
        modifyValues,
        decodeFacetValue,
        cleanFacetValue,
        getCategoryFacetByValue,
        encodeCategoryFacetValue,
        cleanEncodedFacetValue
    })
}
export {
    setFacetMethods as default,
    getBucketedFacets,
    getSelectedBucketedFacet,
    getFilterFromParams,
    getCategoryFilterFromParams,
    getRangeFacets,
    getFacets,
    getSelectedFacets,
    getSelectedFacet,
    updateFacets,
    applyFacets,
    clearFacets,
    addFacets,
    findSelectedFacet,
    deleteCategoryFilter,
    deleteFacet,
    getFacetByValue,
    getSelectedFacetValue,
    setCategoryFilter,
    setDefaultCategoryFilter,
    setRangeFacet,
    clearARangeFacet,
    applyRangeFacet,
    isFacetAlreadyAdded,
    getSelectedRanges,
    getRanges,
    sortFacets,
    isCategoryFacet,
    getAllFacets,
    getAFacetByName,
    getSelectedMultilevelFacet,
    getAllTextFacets,
    getAllRangeFacets,
    getAllCategory,
    getAllSelectedFacets,
    getSelectedFacetsCount,
    getSelectedFacetValueCount,
    encodeFacetValue,
    modifyFacetsList,
    modifyValues,
    decodeFacetValue,
    cleanFacetValue,
    getCategoryFacetByValue,
    encodeCategoryFacetValue,
    cleanEncodedFacetValue
};
