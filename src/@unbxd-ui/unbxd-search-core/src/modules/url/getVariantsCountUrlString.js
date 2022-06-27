export default function () {
    const {
        variants
    } = this.options;
    if(variants) {
        const {
            enabled,
            count
        } = variants;
        return count && enabled ? `&variants.count=${count}` :""
    }
    return "";
};

