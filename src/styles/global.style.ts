import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #root {
    font-family: 'Inter', serif;
    color: #2e2e2e;
    background: #fafafa;
    min-height: 100vh;
  }
`;