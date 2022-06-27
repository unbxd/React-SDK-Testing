export default function() {
    const searchMeta = this.getSearchMeta();
    if(searchMeta) {
        return searchMeta.queryParams || null
    }
    return null;
};
