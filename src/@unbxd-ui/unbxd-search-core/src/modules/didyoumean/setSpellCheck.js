export default function (enableSpellCheck) {
    if (enableSpellCheck) {
        this.options.spellCheck.enabled = true;
    } else {
        this.options.spellCheck.enabled = false;
    }
};
