import React from 'react';
import { Pagination } from '@unbxd-ui/react-search-sdk';
import unbxdSearchConfig from '../unbxd-search.config.json';

const Paginator = () => {
  return (
    <div className="UNX-pagination__pageNavigation">
      <Pagination padding={unbxdSearchConfig.padding} />
    </div>
  );
};

export default Paginator;
