export default function () {

    if (this.options.spellCheck.enabled) {
        return "&spellcheck=" + true;
    }
    return "";
};
