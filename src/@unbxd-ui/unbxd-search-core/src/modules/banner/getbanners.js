/**
*  @description 
* will return Banners array if it is available. in following format.
*example:
   <pre>
        <code>
        [
            {
                "imageUrl": "http://andersonpta.org/test/static/sale.jpg"
            }
        ]
        </code>
    </pre>
    * @method getBanners 
*/

export default function() {
    const resp = this.getResponseObj()||{};
    if(resp && resp.banner && resp.banner.banners) {
        return resp.banner.banners || [];
    }
    return [];
};