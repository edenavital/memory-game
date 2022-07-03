import { createGlobalStyle } from "../theme";

export const GlobalStyle = createGlobalStyle`
  * {
    /* font-family: 'Gilroy-Bold', sans-serif !important; */
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.fontSize};
  }
  body {
    margin: 0;
    padding: 0;
  }
`;
