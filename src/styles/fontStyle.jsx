import { createGlobalStyle } from 'styled-components';
import FrauncesTTF from '../fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf';
import ManropeTTF from '../fonts/manrope/Manrope-VariableFont_wght.ttf';

const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fraunces';
    font-weight: 400 700;
    src: url(${FrauncesTTF});
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 400 700;
    src: url(${ManropeTTF});
  }

  :root {
    --ff-heading: 'Fraunces', serif;
    --ff-body: 'Manrope', sans-serif;

    --fs-small: 1rem;
    --fs-normal: 1.125rem;
    --fs-medium: 1.75rem;
    --fs-large: 2rem;
    --fs-extra-large: 3rem;
    --fs-huge: 3.75rem;

    --fw-normal: 400;
    --fw-semibold: 400;
    --fw-bold: 700;

    --font-heading-large: var(--fw-semibold) var(--fs-extra-large)/1 var(--ff-heading);
    --font-heading-medium: var(--fw-semibold) var(--fs-large)/1.14 var(--ff-heading);
    --font-heading-small: var(--fw-semibold) var(--fs-medium)/1.28 var(--ff-heading);
    --font-body: var(--fw-normal) var(--fs-small)/1.75 var(--ff-body);

    @media screen and (min-width: 32em) {    
      --font-heading-large: var(--fw-semibold) var(--fs-huge)/1 var(--ff-heading);
      --font-heading-medium: var(--fw-semibold) var(--fs-extra-large)/1.16 var(--ff-heading);
    }

    @media screen and (min-width: 1000px) {
      --fs-huge: 5rem;
      --fs-extra-large: 3.5rem;

      --font-heading-small: var(--fw-semibold) var(--fs-large)/1.25 var(--ff-heading);
      --font-body: var(--fw-normal) var(--fs-normal)/1.7778 var(--ff-body);
    }
  }
`;

export default FontStyle;
