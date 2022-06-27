import getBanners from './getbanners';
const setBannerMethods = (prototype) => {
    prototype = Object.assign(prototype, {
        getBanners
    });
}
export {
    setBannerMethods as default,
    getBanners
}