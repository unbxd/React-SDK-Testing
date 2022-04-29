import React from 'react';
import { FacetActions } from '../@unbxd-ui/react-search-sdk/';

const ApplyFilter = ({ onApplyFilter }) => (
    <button className="-apply" onClick={onApplyFilter}>
        Apply
    </button>
);
const ClearFilter = ({ onClearFilter }) => (
    <button className="-clear" onClick={onClearFilter}>
        Clear
    </button>
);

const FacetApplyClear = (props) => {
    const { handleClose } = props;
    const onApply = () => {
        handleClose && handleClose();
        return true;
    };

    const onClear = () => {
        handleClose && handleClose();
        return true;
    };
    return (
        <FacetActions
            applyFilterComponent={<ApplyFilter/>}
            clearFilterComponent={<ClearFilter/>}
            onApply={onApply}
            onClear={onClear}
        />
    );
};

export default FacetApplyClear;
