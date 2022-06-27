/**
* @description 
<pre>
    <code>
        getProductByPropValue(uniqueId , 'u123344')
    </code>
</pre>
* to get a specific object from response using a property and value
* @param {string} prop eg: "uniqueId
* @param {string} value eg:'100'
* @method getProductByPropValue
*/
export default function(prop, value) {
    const {
        products
    } = this.state;
    return products.find((item)=> {
        return item[prop] === value
    })
};
