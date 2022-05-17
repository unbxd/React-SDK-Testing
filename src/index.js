import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import unbxdSearchConfig from './unbxd-search.config.json';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
(function () {
  window.UnbxdSiteName = unbxdSearchConfig.siteKey;
  window.UnbxdAnalyticsConf = window.UnbxdAnalyticsConf || {};

  var jsfiles = [
    '//libraries.unbxdapi.com/ua-js/v1.0.0/uaLibrary.js',
    '//dx63c0414f4j1.cloudfront.net/rex_template_content/unbxd_recs_template_sdk_dev.js',
  ];

  jsfiles.forEach(function (file, index) {
    var s1 = document.createElement('script');
    s1.type = 'text/javascript';
    s1.async = true;
    s1.src = file;
    (
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(s1);
  });
})();

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
