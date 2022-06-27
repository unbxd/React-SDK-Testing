/**
*  @description 
* will return did you mean texts in an array. 
*example:
   <pre>
        <code>
        [
            {
                "suggestion": "black",
                "frequency": "509"
            }
        ]
        </code>
    </pre>
    * @method getDidYouMeanFromResponse 
*/

export default function() {
    const responseObj = this.getResponseObj()||{};
    if(responseObj && responseObj.didYouMean) {
        return responseObj.didYouMean
    }
    return [];
};
