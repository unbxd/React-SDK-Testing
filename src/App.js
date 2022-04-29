import React,{useState} from 'react';
import unbxdSearchConfig from './unbxd-search.config.json';
import UnbxdSearchWrapper from './@unbxd-ui/react-search-sdk/';
import SearchBar from './components/SearchBar';
import ProductsListing from './components/ProductsListing';

import SpellChecker from './components/SpellChecker';
import Paginator from './components/Paginator';
import Sorter from './components/Sorter';
import MerchandizingBanner from './components/MerchandizingBanner';
import TextFilters from './components/TextFilters';
import RangeFilters from './components/RangeFilters';
import MultilevelFilters from './components/MultilevelFilters';
import ActiveFilters from './components/ActiveFilters';
import Crumbs from './components/Crumbs';
import SearchDescription from './components/SearchDescription';
import ProductViewTypes from './components/ProductViewTypes';
import ProductsSize from './components/ProductsSize';
import FacetApplyClear from './components/FacetApplyClear';
import MobileModal from './components/MobileModal';
import MobileMenu from './components/MobileMenu';

import './@unbxd-ui/react-search-sdk/public/dist/css/core.css';
import './@unbxd-ui/react-search-sdk/public/dist/css/theme.css';
import './style.css';

export default function App() {
  console.log(UnbxdSearchWrapper, 'UnbxdSearchWrapper');
  const [showFilters, setShowFilters] = useState(false);
    const handleClose = () => setShowFilters(false);
    const handleShow = () => setShowFilters(true); 
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
        <MobileModal showFilters={showFilters} handleClose={handleClose} />
            <SearchBar />

            <MobileMenu handleShow={handleShow} />

            <div className="UNX-search__container">
                <div className="UNX-searchMeta__container">
                    <Crumbs />
                    <div className="UNX-searchMeta__more">
                        <ActiveFilters />
                        <ProductViewTypes />
                    </div>
                </div>
                <div className="UNX-searchResults__container">
                    <div className="UNX-searchFacet__container">
                        <MultilevelFilters />
                        <RangeFilters />
                        <TextFilters />
                    </div>

                    <div className="UNX-searchResult__container">
                        <MerchandizingBanner />
                        <SearchDescription />
                        <SpellChecker />

                        <div className="UNX-searchHeader__container">
                            <Sorter />
                            <ProductsSize />
                            <Paginator />
                        </div>

                        <ProductsListing />

                        <Paginator />
                    </div>
                </div>
            </div>
      </UnbxdSearchWrapper>
    </div>
  );
}
