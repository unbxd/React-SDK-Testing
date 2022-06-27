export default function () {
    const {
        searchEndPoint,
        siteKey,
        apiKey
    } = this.options;
    return searchEndPoint + apiKey + "/" + siteKey
};
