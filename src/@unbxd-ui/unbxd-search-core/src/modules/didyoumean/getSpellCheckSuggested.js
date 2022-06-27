/**
*  @description 
* will return did you mean text. 
*example:
   <pre>
        <code style='color:red'>
             "black"
        </code>
    </pre>
    * @method getDidYouMeanFromResponse 
*/

export default function () {
    const arr = this.state.didYouMean || [];
    const suggestions = arr.map(item => {
        return item.suggestion
    })
    
    return suggestions;
};
