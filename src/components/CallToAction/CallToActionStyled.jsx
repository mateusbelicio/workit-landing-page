import styled from 'styled-components';

export const CallToActionStyled = styled.section`
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
  }

  .button {
    margin-top: 0.5rem;
  }
`;
