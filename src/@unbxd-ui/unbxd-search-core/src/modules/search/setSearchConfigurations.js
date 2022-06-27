function setSearchConfigurations(configurations) {
    const {
        siteName,
        siteKey,
        searchEndPoint,
        searchQueryParam,
        browseQueryParam,
        defaultFilters,
        spellCheck,
        pageSize,
        startPageNo,
        facetDepth,
        facetMultilevel,
        facetMultiSelect,
        updateUrls,
        extraParams,
        onEvent,
        getCategoryId,
        applyMultipleFilters,
        hashMode,
    } = configurations;

    this.state.pageSize = pageSize || this.state.pageSize;
    this.state.startPageNo = startPageNo || this.state.startPageNo;

    this.options.siteName = siteName || this.options.siteName;
    this.options.siteKey = siteKey || this.options.siteKey;
    this.options.searchEndPoint = searchEndPoint || this.options.searchEndPoint;
    this.options.searchQueryParam =
        searchQueryParam || this.options.searchQueryParam;
    this.options.browseQueryParam =
        browseQueryParam || this.options.browseQueryParam;
    this.options.defaultFilters = defaultFilters || this.options.defaultFilters;
    this.options.spellCheck = spellCheck || this.options.spellCheck;
    this.options.pageSize = pageSize || this.options.pageSize;
    this.options.startPageNo = startPageNo || this.options.startPageNo;
    this.options.applyMultipleFilters =
        applyMultipleFilters || this.options.applyMultipleFilters;
    this.options.facetDepth = facetDepth || this.options.facetDepth;
    this.options.facetMultilevel =
        facetMultilevel || this.options.facetMultilevel;
    this.options.facetMultiSelect =
        facetMultiSelect || this.options.facetMultiSelect;
    this.options.updateUrls = updateUrls || this.options.updateUrls;
    this.options.extraParams = extraParams || this.options.extraParams;
    this.options.onEvent = onEvent || this.options.onEvent;
    this.options.getCategoryId = getCategoryId || this.options.getCategoryId;
    this.options.hashMode = hashMode || this.options.hashMode;
}

export default setSearchConfigurations;
