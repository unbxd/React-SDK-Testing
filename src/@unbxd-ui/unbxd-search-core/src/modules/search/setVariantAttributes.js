export default function (requiredFields) {
    const {
        variants = {}
    } = this.options;
    if (Array.isArray(requiredFields)) {
        variants.attributes = requiredFields;
    }
    this.options.variants = variants;
};
