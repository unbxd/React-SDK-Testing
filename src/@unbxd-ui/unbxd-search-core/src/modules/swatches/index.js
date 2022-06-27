import getSwatches from './getSwatches';

const setSwatchMethods  = (prototype) => {
    Object.assign(prototype, {
        getSwatches
    });
}
export {
    setSwatchMethods as default,
    getSwatches
};
