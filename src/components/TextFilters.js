import React from 'react';
import { TextFacets } from '../@unbxd-ui/react-search-sdk/';

export const FacetItemComponent = ({ itemData, onClick }) => {
    const { name, count, isSelected } = itemData;
    const handleClick = () => {
        onClick(itemData);
    };

    return (
        <div
            className={`UNX-facet__item ${isSelected ? '-selected' : ''}`}
            onClick={handleClick}
        >
            <div className="-checkbox"></div>
            <div className="-label">{name}</div>
            <div className="-count">({count})</div>
        </div>
    );
};

const TextFilters = () => {
    return (
        <TextFacets
            facetItemComponent={<FacetItemComponent/>}
            collapsible={true}
            enableViewMore={true}
            searchable={true}
        />
    );
};

export default TextFilters;
