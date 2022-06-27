export default function() {
    const {
        rangeFacet
    } = this.state;
    const keysMap = Object.keys(rangeFacet);
    let str =``;
    keysMap.forEach(item => {
        const range = rangeFacet[item];
        if(Array.isArray(range)) {
            if(range.length >0){
                str+=`&filter=${item}:${range.join(` OR ${item}:`)}`;
            }
        } else {
            str+= `&filter=${item}:${range}`
        }
    })
    return str;
};
