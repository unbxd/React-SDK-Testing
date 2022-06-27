export default function() {
    if(this.options.productAttributes){
        return "&fields="+this.options.productAttributes.join(",");
    }
    return "";
};
