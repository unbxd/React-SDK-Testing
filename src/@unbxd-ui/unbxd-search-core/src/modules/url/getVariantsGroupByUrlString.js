export default function () {
    const {
        variants
    } = this.options;
    if(variants) {
        const {
            enabled,
            groupBy
        } = variants;
        return groupBy && enabled ? `&variants.groupBy=${groupBy}` :""
    }
    return "";
};
