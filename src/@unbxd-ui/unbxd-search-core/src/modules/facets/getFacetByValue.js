export default function (facetName,valueName) {
    const selectedfacetInfo = this.getSelectedFacet(facetName) || {
        facetName:facetName
    };
    
    let actualFound = false;
    let selectedFound = null;
    const {
        values = []
    } = selectedfacetInfo;
    let foundId =  {
        name:valueName
    };
    if(values.length > 0) { 
        for(let i =0; i< values.length;i++) {
            let item = values[i];
            if(item.name === valueName) {
                actualFound = true;
                foundId = item;
                break;
            }
        }
    }
    if(actualFound) {
        selectedFound = {
            ...selectedfacetInfo,
            selectedvalue:foundId,
            actualFound
        }
    }else {
        selectedFound = {
            facetName,
            actualFound,
            selectedvalue:{
                name:valueName,
                dataId:valueName,
                count:0
            }
        }
    }
    return selectedFound;
};
