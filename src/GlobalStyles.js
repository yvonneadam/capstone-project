import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    font-size: 1.125rem;
    font-family: 'Urbanist', sans-serif;
    height: 100%;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
