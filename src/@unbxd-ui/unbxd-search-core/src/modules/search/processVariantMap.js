export default function(resp = {}) {
    const self = this;
    const {
        mapping = {}
    }  = self.options.variants;
    const vMap = mapping;
    const obArr = Object.keys(vMap);
    if(resp.response && resp.response.products) {
        let mappedProducts = resp.response.products.map((item) => {
            const {
                variants = [],
                relevantDocument
            } = item;
            let newObj =  item;
            if(relevantDocument === "variant" && variants.length >0) {
                item = variants[0];
                obArr.forEach((keyItem) => {
                    const mapKey = vMap[keyItem];
                    newObj[keyItem] = item[mapKey];
                })
            }
            let mappedVariants = [];
            variants.forEach((item,i) => {
                let mItem = item;
                obArr.forEach((keyItem) => {
                    const mapKey = vMap[keyItem];
                    if(mapKey){
                        mItem[keyItem] = item[mapKey];
                    }
                })
                mappedVariants.push(mItem);

            })
            newObj.variants = mappedVariants;
            return newObj;
        });
        resp.response.products = mappedProducts;
    }
    return resp
};
