export default function (nVariants) {
    const {
        variants = {}
    } = this.options;
    if (typeof nVariants === 'number') {
        variants.count = nVariants;
    }
    this.options.variants = variants;
};
