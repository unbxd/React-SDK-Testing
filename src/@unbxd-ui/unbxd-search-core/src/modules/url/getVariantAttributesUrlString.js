export default function () {
    const {
        variants
    } = this.options;
    if(variants) {
        const {
            enabled,
            attributes
        } = variants;
        return attributes && enabled ? `&variants.fields=${attributes.join(",")}` :""
    }
    return "";
};
