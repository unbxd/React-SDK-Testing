export default function(product,map) {
    let swatches = {};
    const keys = Object.keys(map);
    keys.forEach(item => {
        const val = map[item]
        swatches[item] = product[val]
    })
    return swatches;
};
