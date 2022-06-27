import getBaseUrl from './getBaseUrl';
import extraParamUrlString from './extraParamsFromUrlToString';
import renderFromUrl from './setStateFromUrl';
import getQueryParams from './getQueryParams';
import getDefaultFiltersStr from './getDefaultFiltersString';
import urlFlattenFacets from './facetsToUrlString';
import getShowVariantsStr from './getShowVariantsUrlString';
import getVariantAttributesStr from './getVariantAttributesUrlString';
import getVariantsCountStr from './getVariantsCountUrlString';
import getVariantsGroupByStr from './getVariantsGroupByUrlString';
import getProductAttributesStr from './getProductAttributesUrlString';
import getPageSizeStr from './getPageSizeUrlString';
import getPageStartStr from './getPaginationStartUrlString';
import getNewUrlState from './getNewUrlState';
import getRangeFilterStr from './getRangeFilterString';
import categoryFilterUrlStr from './categoryFilterUrlString';
import getSortUrlString from './getSortUrlString';
import getSpellCheckUrlString from './getSpellCheckUrlString';
import getStateFromUrl from './getStateFromUrl';

const methods = {
    extraParamUrlString,
    renderFromUrl,
    getQueryParams,
    urlFlattenFacets,
    getDefaultFiltersStr,
    getShowVariantsStr,
    getVariantAttributesStr,
    getVariantsCountStr,
    getVariantsGroupByStr,
    getProductAttributesStr,
    getPageSizeStr,
    getPageStartStr,
    getNewUrlState,
    getRangeFilterStr,
    categoryFilterUrlStr,
    getSortUrlString,
    getSpellCheckUrlString,
    getBaseUrl,
    getStateFromUrl
};
const urlMethods = (prototype) => {
    prototype = Object.assign(prototype, methods);
}
export {
    urlMethods as default,
    methods
};
