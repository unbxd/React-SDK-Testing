import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
(function () {
  //var ubx = document.createElement('script');
  window.UnbxdSiteName = 'demo-unbxd700181503576558';
  window.UnbxdAnalyticsConf = window.UnbxdAnalyticsConf || {};
  // ubx.type = 'text/javascript';
  // ubx.async = true;
  // ubx.src = '//d21gpk1vhmjuf5.cloudfront.net/unbxdAnalytics.js';
  // (
  //   document.getElementsByTagName('head')[0] ||
  //   document.getElementsByTagName('body')[0]
  // ).appendChild(ubx);

  var jsfiles = [
    '//libraries.unbxdapi.com/ua-js/v1.0.0/uaLibrary.js',
    '//libraries.unbxdapi.com/recs-sdk/v2.0.0/unbxd_rex_template_sdk.js',
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
