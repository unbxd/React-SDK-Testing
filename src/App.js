import React from 'react';
import unbxdSearchConfig from './unbxd-search.config.json';
import UnbxdSearchWrapper from './@unbxd-ui/react-search-sdk/';
import SearchBar from './components/SearchBar';
import ProductsListing from './components/ProductsListing';
import './@unbxd-ui/react-search-sdk/public/dist/css/core.css';
import './@unbxd-ui/react-search-sdk/public/dist/css/theme.css';
import './style.css';

export default function App() {
  console.log(UnbxdSearchWrapper, 'UnbxdSearchWrapper');
  const searchConfigurations = {
    updateUrls: false,
  };
  return (
    <div>
      <UnbxdSearchWrapper
        siteKey={unbxdSearchConfig.siteKey}
        apiKey={unbxdSearchConfig.apiKey}
        searchConfigurations={searchConfigurations}
        onRouteChange={(searchObj, hash, refreshId) => {
          console.log(searchObj, hash, refreshId);
        }}
      >
        <SearchBar />
        <ProductsListing />
      </UnbxdSearchWrapper>
    </div>
  );
}
