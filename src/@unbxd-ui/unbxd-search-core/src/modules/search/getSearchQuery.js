
export default function () {
    if (this.state.responseObj) {
        const { queryParams } = this.state.responseObj.searchMetaData;
        return queryParams.q || queryParams.p
    }

    return "";
};
