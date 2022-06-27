export default function () {
    const {
        variants
    } = this.options;
    return (variants && typeof variants.enabled === "boolean") ? `&variants=${variants.enabled}` : "";
};
