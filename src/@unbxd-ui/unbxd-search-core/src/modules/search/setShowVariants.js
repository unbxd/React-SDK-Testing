export default function (isVariant) {
    const {
        variants = {}
    } = this.options;
    if (typeof isVariant === 'boolean') {
        variants.enabled = isVariant;
    }
    this.options.variants  = variants;
};
