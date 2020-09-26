// GlobalStyles.js
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    font-size:16px;
  }
  *{
    box-sizing:border-box;
    font-family: 'Nunito', sans-serif;
    padding:0px;
    margin:0px;
    color:#3d3d3d;
  }
`;
export default GlobalStyle;
