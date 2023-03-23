import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-primary-400: hsl(273, 85%, 13%);
    --clr-neutral-100: hsl(0, 0%, 100%);
    --clr-neutral-200: hsl(276, 100%, 99%);
    --clr-neutral-400: hsl(271, 12%, 34%);
    --clr-accent-400: hsl(150, 100%, 63%);
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    width: 100%;
    text-rendering: optimizeSpeed;
    font: var(--font-body);
    color: var(--clr-primary-400);
    text-align: center;
  }

  #root {
    overflow-x: hidden;
  }

  h1 {
    font: var(--font-heading-large);
  }

  h2 {
    font: var(--font-heading-medium);
  }

  h3 {
    font: var(--font-heading-small);
  }

  button, 
  textarea, 
  input, 
  select {
    font: inherit;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
