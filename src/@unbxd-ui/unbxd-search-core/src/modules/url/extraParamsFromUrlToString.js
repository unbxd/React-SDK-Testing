export default function() {
    const {
        extraParams
    } = this.options;
    let str = "";
    const keys = Object.keys(extraParams);
    keys.forEach(key => {
        str += "&"+key+"="+extraParams[key]
    })
    return str;
};
