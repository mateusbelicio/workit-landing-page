import { createGlobalStyle } from 'styled-components';

const UtilityStyle = createGlobalStyle`
  .container {
    margin-inline: 1rem;
    max-width: 69.375rem;
  }

  .grid {
    display: grid;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .section {
    padding-block-start: 9.75rem;
  }

  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }

  @media screen and (min-width: 38em) {
    .container {
      margin-inline: 2.5rem;
    }
  }

  @media screen and (min-width: 75em) {
    .container {
      margin-inline: auto;
    }
  }
`;

export default UtilityStyle;
