import setProductAttributes from './setProductAttributes';
import setShowVariants from './setShowVariants';
import setVariantsCount from './setVariantsCount';
import setVariantAttributes from './setVariantAttributes';
import setVariantsGroupBy from './setVariantsGroupBy';
import getSearchMeta from './getSearchMetaDetails';
import getSearchResults from './getSearchResults';
import getSearchQueryParams from './getSearchQueryParams';
import getSearchQuery from './getSearchQuery';
import getResults from './getResultsFromApi';
import processVariantMap from './processVariantMap';
import getProductByPropValue from './getProductByPropValue';
import setStateFromData from './setStateFromData';
import setSearchConfigurations from './setSearchConfigurations';
const onLocationChange = function (evt){
    const {
        urlState,
        isHistory
    } = this.state;
    const {
        hashMode
    } = this.options;
    if(hashMode){
        if(decodeURIComponent(location.hash) !== `#${decodeURIComponent(urlState)}`){
            const {
                path
            } = history.state || {};
            this.state.isBack = true;
            this.renderFromUrl(evt.state);
            
        }else {
            this.callBack(this, "lastBack");
        }
    }else {
        if(isHistory){
            const {
                path
            } = history.state || {};
            this.state.isBack = true;
            this.renderFromUrl(evt.state);
           //history.go(-1)
        } else {
            this.callBack(this, "lastBack");
        }
    }
}
const getRequestId = function() {
    const {
        requestId
    } = this.state;
    return requestId;
}

const setSearchMethods = (prototype) => {
    prototype = Object.assign(prototype, {
        setProductAttributes,
        setShowVariants,
        setVariantsCount,
        setVariantAttributes,
        setVariantsGroupBy,
        getSearchResults,
        getSearchMeta,
        getSearchQueryParams,
        getSearchQuery,
        getResults,
        processVariantMap,
        getProductByPropValue,
        setStateFromData,
        setSearchConfigurations,
        onLocationChange,
        getRequestId
    });
}
export {
    setSearchMethods as default,
    setProductAttributes,
    setShowVariants,
    setVariantsCount,
    setVariantAttributes,
    setVariantsGroupBy,
    getSearchResults,
    getSearchMeta,
    getSearchQueryParams,
    getSearchQuery,
    getResults,
    processVariantMap,
    getProductByPropValue,
    setStateFromData,
    setSearchConfigurations,
    onLocationChange,
    getRequestId
};
