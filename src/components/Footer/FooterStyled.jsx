import styled from 'styled-components';

export const FooterStyled = styled.footer`
  padding-block: 2.3125rem 4rem;

  @media screen and (min-width: 60em) {
    padding-block: 3.75rem 6.875rem;
  }

  .footer {
    &__container {
      row-gap: 58px;
      justify-items: center;
    }

    &__logo {
      height: 1.5rem;
      width: 6rem;
    }

    &__social {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      list-style: none;
    }
  }
`;
