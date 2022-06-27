export default function(sortItem){
    if(sortItem !== undefined) {
        this.state.selectedSort = sortItem; 
    } else {
        const qParams = this.getSearchQueryParams();
        this.state.selectedSort = (qParams.sort)?qParams.sort: "";
    }
};
