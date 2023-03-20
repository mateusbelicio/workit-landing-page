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

  @media screen and (min-width: 1110px) {
    .container {
      margin-inline: auto;
    }
  }
`;

export default UtilityStyle;
