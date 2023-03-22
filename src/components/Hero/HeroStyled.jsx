import styled from 'styled-components';
import pattern1 from '../../assets/bg-pattern-1.svg';
import pattern2 from '../../assets/bg-pattern-2.svg';

export const HeroStyled = styled.div`
  padding-block: 4rem 9.75rem;
  color: var(--clr-neutral-100);
  position: relative;
  background-image: radial-gradient(
    150% 100% at 50% 10%,
    var(--clr-primary-400) 90%,
    var(--clr-neutral-200) 90%
  );
  background-repeat: no-repeat;

  @media screen and (min-width: 32em) {
    padding-block: 4rem 12.6875rem;

    &::before {
      content: url(${pattern1});
      position: absolute;
      top: 0;
      right: 85%;
      display: block;
    }

    &::after {
      content: url(${pattern2});
      position: absolute;
      top: 35%;
      left: 90%;
      display: block;
    }
  }

  @media screen and (min-width: 60em) {
    padding-block: 4rem 20.375rem;
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
