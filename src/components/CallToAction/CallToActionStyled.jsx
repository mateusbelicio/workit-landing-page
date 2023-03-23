import styled from 'styled-components';
import pattern3 from '../../assets/bg-pattern-3.svg';

export const CallToActionStyled = styled.section`
  padding-block: 6.875rem 2.3125rem;

  @media screen and (min-width: 60em) {
    padding-block: 6.875rem 3.75rem;
  }

  .cta {
    &__container {
      justify-items: center;
    }

    &__content {
      background-color: var(--clr-primary-400);
      color: var(--clr-neutral-100);
      padding: 2rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      position: relative;
      z-index: 2;
    }

    &__picture {
      grid-row: 1;
      transform: translateY(3.375rem);
      position: relative;
      z-index: 1;
      aspect-ratio: 1;
      width: 17.5625rem;
    }

    @media screen and (min-width: 40em) {
      &__container {
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(2, min-content) 1fr;
        column-gap: 0.625rem;
      }

      &__content {
        padding: 3rem 3.5rem 3.5rem;
        gap: 1.5rem;

        grid-column: 4 / -1;
        grid-row: 2 / -1;
        text-align: left;
        align-items: flex-start;

        &::before {
          content: url(${pattern3});
          position: absolute;
          top: 64%;
          left: 60%;
          display: block;
        }
      }

      &__picture {
        grid-column: 1 / span 5;
        grid-row: 1 / span 2;
        transform: none;
      }
    }

    @media screen and (min-width: 60em) {
      &__container {
        column-gap: 1.875rem;
        grid-template-rows: repeat(7, 1fr);
        row-gap: 1.25rem;
      }

      &__content {
        padding: 4rem;
        gap: 2rem;

        grid-column: 5 / -1;
        grid-row: 3 / -1;
      }

      &__picture {
        width: 100%;
        transform: scale(1.07);
        transform-origin: left top;
        grid-row: 1 / span 6;
      }
    }
  }

  .button {
    margin-top: 0.5rem;
  }
`;
