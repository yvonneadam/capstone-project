import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    background-color: #fae9c3;
  }

  body {
    margin: 0;
    font-size: 1.125rem;
    font-family: sans-serif;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
