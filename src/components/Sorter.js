import React from 'react';
import { Sort } from '../@unbxd-ui/react-search-sdk/';
import unbxdSearchConfig from '../unbxd-search.config.json';

const label = <div className="-label">Sort by</div>;
const Sorter = () => {
  return <Sort sortOptions={unbxdSearchConfig.sortOptions} label={label} />;
};

export default Sorter;
