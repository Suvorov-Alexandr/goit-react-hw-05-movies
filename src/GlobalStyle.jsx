import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  img,
  picture {
    display: block;
    max-width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    margin: 0;
  }

  a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
