import getBreadCrumbsList from './getBreadCrumbsList';
import getBreadCrumbs from './getBreadCrumbs';

const setBreadCrumbs = (prototype) => {
    prototype = Object.assign(prototype, {
        getBreadCrumbsList,
        getBreadCrumbs
    });
}
export {
    setBreadCrumbs as default,
    getBreadCrumbsList,
    getBreadCrumbs
}