import React from 'react';
import { Breadcrumbs } from '../@unbxd-ui/react-search-sdk/';;

const BreadcrumbItemComponent = ({
    itemData,
    root,
    separator,
    idx,
    onClick,
}) => {
    const { value } = itemData;
    const handleClick = () => {
        onClick(itemData);
    };
    return (
        <>
            {idx === 0 && root}
            {''}
            {separator}
            {''}
            <div className={'UNX-breadcrumbs-list-item'} onClick={handleClick}>
                {value}
            </div>
        </>
    );
};

const Root = () => <span className="UNX-breadcrumb__root">Home</span>;
const separator = <span className="UNX-breadcrumb__separator">/</span>;

const Crumbs = () => {
    return (
        <Breadcrumbs
            root={<Root/>}
            separator={separator}
            breadcrumbItemComponent={<BreadcrumbItemComponent/>}
        />
    );
};

export default Crumbs;
