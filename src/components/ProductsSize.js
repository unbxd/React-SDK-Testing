import React from 'react';
import { PageSize } from '../@unbxd-ui/react-search-sdk/';
import unbxdSearchConfig from '../unbxd-search.config.json';

const label = <div className="-label">Products per page</div>;

const ProductsSize = () => {
  return (
    <PageSize sizeOptions={unbxdSearchConfig.pageSizeOptions} label={label} />
  );
};

export default ProductsSize;
