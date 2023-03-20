import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/globalStyle';
import FontStyle from './styles/fontStyle';
import UtilityStyle from './styles/utilityStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <FontStyle />
    <UtilityStyle />
    <App />
  </React.StrictMode>
);
