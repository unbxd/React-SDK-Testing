export default function() {
    let str="";
    const filters  =this.options.defaultFilters;
    if( filters !== null) {
        const keys = Object.keys(filters);
        keys.forEach(item=>{
            str += "&filter="+item+":"+JSON.stringify(filters[item]);
        })
    }
    return str;
};
