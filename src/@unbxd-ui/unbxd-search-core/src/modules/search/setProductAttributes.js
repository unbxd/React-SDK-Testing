export default function (requiredFields) {
    if (Array.isArray(requiredFields)) {
        this.options.productAttributes = requiredFields;
    } else {
        this.options.productAttributes = '*';
    }
};
