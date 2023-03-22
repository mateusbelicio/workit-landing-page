import styled from 'styled-components';

export const HeroStyled = styled.div`
  padding-block: 4rem 9.75rem;
  background-color: var(--clr-primary-400);
  color: var(--clr-neutral-100);
  position: relative;

  @media screen and (min-width: 32em) {
    padding-block: 4rem 12.6875rem;
  }

  @media screen and (min-width: 60em) {
    padding-block: 4rem 20.375rem;
  }

  .divider {
    position: absolute;
    top: 100%;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -1;
    color: var(--clr-primary-400);

    svg {
      position: relative;
      display: block;
      width: calc(100%);
      height: 18px;
    }
  }

  .hero {
    &__container {
      display: grid;
      row-gap: 3rem;
      justify-items: center;

      position: relative;
    }

    &__image {
      position: absolute;
      top: calc(100% + 4rem);
      max-width: 32.125rem;
      width: 90%;

      @media screen and (min-width: 60em) {
        max-width: 47.9375rem;
      }
    }

    &__title {
      max-width: 12ch;

      span {
        text-decoration-line: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: var(--clr-accent-400);
        text-underline-offset: 6px;
      }
    }
  }
`;
