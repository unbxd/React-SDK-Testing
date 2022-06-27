import getDidYouMeanFromResponse from './getDidYouMeanFromResponse';
import getSpellCheckSuggested from './getSpellCheckSuggested';
import setSpellCheck from './setSpellCheck';

const setDidYouMeanMethods = (prototype) => {
    prototype = Object.assign(prototype, {
        getDidYouMeanFromResponse,
        getSpellCheckSuggested,
        setSpellCheck
    })
}
export {
    setDidYouMeanMethods as default,
    getDidYouMeanFromResponse,
    getSpellCheckSuggested,
    setSpellCheck
};
