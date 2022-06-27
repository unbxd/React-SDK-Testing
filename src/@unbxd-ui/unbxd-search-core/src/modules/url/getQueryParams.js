export default function(pathState) {
    const  {
        searchQueryParam,
        hashMode
    } = this.options;
    let q = (this.options.hashMode)?location.hash : location.search;
    let uri = q.substr(1);
    if(pathState) {
        uri = pathState;
    }
    const splited = uri.split('&');
    let chunks = [];
    splited.forEach((item,index) => {
        if(item.indexOf("=") > 0){
            chunks.push(item)
        } else {
            chunks[index-1] = chunks[index-1]+"&"+item;
        }
    })
    let params = {};

    for (let i=0; i < chunks.length ; i++) {
        const chunk = chunks[i].split('=');
        if( typeof params[chunk[0]] === 'undefined' ) {
            params[chunk[0]] = chunk[1];
        } else {
            if(typeof params[chunk[0]] === "string") {
                params[chunk[0]] = [params[chunk[0]]]
                params[chunk[0]].push(chunk[1]);
            } else {
                params[chunk[0]].push(chunk[1]);
            }
            
        }
    }
    return params;
};
