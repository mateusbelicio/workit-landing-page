import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: var(--clr-primary-400);
  color: var(--clr-neutral-100);
  padding-block: 2rem;

  .header {
    &__container {
      justify-content: space-between;
    }

    &__logo {
      height: 1.5rem;
      width: 6rem;
    }
  }
`;
