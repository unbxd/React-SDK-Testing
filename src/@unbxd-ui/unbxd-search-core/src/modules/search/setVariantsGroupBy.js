export default function (field) {
    const {
        variants = {}
    } = this.options;
    if (typeof field === 'string' && field.length > 0) {
        variants.groupBy = field;
    }
    this.options.variants = variants;
};
