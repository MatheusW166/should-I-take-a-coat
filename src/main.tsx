import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ResetStyle, GlobalStyle } from './styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
