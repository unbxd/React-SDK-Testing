import setPageStart from './setPageStart';
import getPaginationInfo from './getPaginationInfo';
import setPageSize from './setPageSize';
const setPaginationMethods = (prototype) => {
    Object.assign(prototype, {
        setPageStart,
        getPaginationInfo,
        setPageSize
    });
}
export {
    setPaginationMethods as default,
    setPageStart,
    getPaginationInfo,
    setPageSize
};
