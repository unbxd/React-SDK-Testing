export default function (encode = false) {
    const {
        productType,
        searchQueryParam,
        browseQueryParam,
    } = this.options;
    let value = this.state.userInput;
    let pagetype = '';
    let qParam = searchQueryParam;
    if(productType === "BROWSE") {
        pagetype = "";
        value = this.getCategoryId();
        const queryString = '/category?';
        qParam = browseQueryParam;
        this.url = this.getBaseUrl() + queryString + qParam + `=${value}`;
    }
    if (productType === "CATEGORY") {
        pagetype = "&pagetype=boolean";
        value = this.getCategoryId();
        const queryString = '/category?';
        qParam  = browseQueryParam;
        this.url = this.getBaseUrl() + queryString + qParam + `=${value}`;
    }
    if(productType === "SEARCH"){
        const queryString = '/search?';
        if(encode){
            value = encodeURIComponent(value);
        }
        this.url = this.getBaseUrl() + queryString + qParam + '=' + value;
    }
    const facetsUrlString = this.urlFlattenFacets();
    const showVariantsStr = this.getShowVariantsStr();
    const variantAttributesStr = this.getVariantAttributesStr();
    const variantsCountStr = this.getVariantsCountStr();
    const variantsGroupByStr = this.getVariantsGroupByStr();
    const productAttributesStr = this.getProductAttributesStr() + this.getDefaultFiltersStr();
    const sortStr = this.getSortUrlString();
    const spellCheckUrlString = this.getSpellCheckUrlString();
    const rangeFilterUrlStr = this.getRangeFilterStr();
    const categoryFilterStr = this.categoryFilterUrlStr();
    let fctmulty = (this.options.facetMultiSelect)?"&facet.multiselect=true":"&facet.multiselect=false";
    const facetV2 = "&facet.version=V2";
    const nowUrl = this.url +
        categoryFilterStr +
        fctmulty +
        facetsUrlString +
        showVariantsStr +
        variantAttributesStr +
        variantsCountStr +
        variantsGroupByStr +
        productAttributesStr +
        sortStr+
        spellCheckUrlString+
        rangeFilterUrlStr+
        pagetype+
        this.getPageSizeStr()+
        this.getPageStartStr()+
        this.extraParamUrlString()+
        facetV2;
    if(!encode) {
        this.state.currentUrl = nowUrl
    }
    return nowUrl ;
};
