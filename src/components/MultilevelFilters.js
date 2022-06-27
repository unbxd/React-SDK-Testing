import React from 'react';
import MultilevelFacets from '../@unbxd-ui/react-search-sdk/src/modules/multilevelFacets';

const FacetItemComponent = ({ itemData, onClick }) => {
    const { name, count, level, isSelected } = itemData;
    const handleClick = () => {
        onClick(itemData);
    };
    return (
        <div
            className={`UNX-facet__item -l${level} ${
                isSelected ? '-selected' : ''
            }`}
            onClick={handleClick}
        >
            <div className="-checkbox"></div>
            <div className="-label">{name}</div>
            {count && <div className="-count">({count})</div>}
        </div>
    );
};

const label = <div className="UNX-searchFacet__mainHeader">Filter By</div>;
const MultilevelFilters = ({ showLabel = true }) => {
    return (
        <MultilevelFacets
            collapsible={true}
            searchable={true}
            facetItemComponent={<FacetItemComponent/>}
            label={showLabel ? label : undefined}
        />
    );
};

export default MultilevelFilters;
