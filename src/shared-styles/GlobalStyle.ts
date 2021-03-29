import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    transition: 0.1s;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
    color: #424242;
  }
`;

export default GlobalStyle;
