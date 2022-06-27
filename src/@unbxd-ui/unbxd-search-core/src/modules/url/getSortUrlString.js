export default function() {
    const selectedSort = this.getSelectedSort();
    if(selectedSort) {
        return "&sort="+encodeURI(selectedSort)
    }
    return "";
};
