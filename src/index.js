import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UnbxdSearchWrapper from '@unbxd-ui/react-search-sdk';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
console.log(UnbxdSearchWrapper,"UnbxdSearchWrapper")
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
