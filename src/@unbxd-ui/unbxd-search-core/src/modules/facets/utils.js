const modifyValues = function(values = []){
    let valuesList = [];
    values.forEach((value, index) => {
        const data = value;
        let newObj = {};
        if(value.name) {
            valuesList.push({
                ...data,
                'dataId': this.encodeFacetValue(value.name)
            })
        } else {
            let prevData = ""
            if(index % 2 === 1) {
                prevData = values[index-1];
                valuesList.push({
                    name:prevData,
                    count:data,
                    dataId:this.encodeFacetValue(prevData)
                });
            }
        }
    });
     return valuesList
}
const modifyFacetsList =function(facets) {
     let facetList = [];
     let modifiedFacets = facets || [];
     modifiedFacets.forEach((facet, index) => {
         const {
            values,
            displayName,
            facetName,
            filterField
         } = facet;
         if(!facetName) {
             if(displayName)  {
                facet.facetName = displayName;
            }
            if(filterField) {
                facet.facetName = filterField;
            }
            
        }
         facet.values = this.modifyValues(values);
         facetList.push(facet);
    });
     return facetList
 }
 //this method is used to encode the facet values if it has some special characters
function hex(c) { 
    const v = '0'+c.charCodeAt(0).toString(16);
    return '\\x'+v.substr(v.length-2); 
}
const encodeFacetValue = function(value) {
    value = value.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\t/g,'\\t').replace(/\v/g,'\\v').replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/[\x00-\x1F\x80-\x9F]/g,hex);
    return encodeURIComponent(value);
};

const encodeCategoryFacetValue = function(value) {
    value = value.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\t/g,'\\t').replace(/\v/g,'\\v').replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/[\x00-\x1F\x80-\x9F]/g,hex);
    return encodeURIComponent(value);
};

const decodeFacetValue = function(value) {
    return decodeURIComponent(new String(`${value}`))
};
const cleanFacetValue = function(value) {
    return value.replace(/[^\w\d]/g, '');
}
const cleanEncodedFacetValue = function(value) {
    let newValue =``;
    const doubleStr = "%22";
    let valArr = value.split(doubleStr);
    if(valArr.length === 1) {
        newValue = valArr[1]
    } else {
        valArr = valArr.slice(1, -1);
        newValue = valArr.join(doubleStr)
    }
    return newValue;

}
 export {
     modifyFacetsList,
     modifyValues,
     encodeFacetValue,
     decodeFacetValue,
     cleanFacetValue,
     encodeCategoryFacetValue,
     cleanEncodedFacetValue
 };