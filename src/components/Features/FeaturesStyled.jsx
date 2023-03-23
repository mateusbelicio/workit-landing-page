import styled from 'styled-components';

export const FeaturesStyled = styled.section`
  background-image: radial-gradient(
    150% 100% at 50% 10%,
    var(--clr-neutral-200) 90%,
    transparent 90%
  );
  background-repeat: no-repeat;

  padding-block: 9.75rem 4.3125rem;

  @media screen and (min-width: 32em) {
    padding-block: 12.6875rem 6.4375rem;
  }

  @media screen and (min-width: 60em) {
    padding-block: 15.9375rem 10.6875rem;
  }

  .features {
    &__list {
      display: grid;
      row-gap: 2.5rem;
      counter-set: item;
      list-style: none;
    }

    &__item {
      counter-increment: item;
      display: grid;
      justify-items: center;
      row-gap: 1rem;

      &::before {
        content: counter(item);
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        border-radius: 50%;
        border: 1px solid var(--clr-neutral-400);
        font-family: var(--ff-heading);
        font-size: 1.25rem;
        font-weight: var(--fw-semibold);
        line-height: 1;
        margin-bottom: 0.5rem;
      }
    }

    @media screen and (min-width: 32em) {
      text-align: left;

      &__name {
        grid-column: 2;
      }

      &__item {
        grid-template-columns: min-content 1fr;
        justify-items: initial;
        text-align: left;
        column-gap: 2rem;

        &::before {
          grid-column: 1;
          grid-row: 2;
          transform: translateY(-7px);
        }
      }
    }

    @media screen and (min-width: 60em) {
      text-align: center;

      &__list {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 1.875rem;
      }

      &__name {
        grid-column: auto;
      }

      &__item {
        grid-template-columns: auto;
        justify-items: center;
        text-align: center;
        row-gap: 1.75rem;

        &::before {
          grid-column: auto;
          grid-row: auto;
          transform: none;
          margin-bottom: 1.75rem;
        }
      }
    }
  }
`;
