import styled from 'styled-components';

export const FooterStyled = styled.footer`
  padding-block: 4.5rem 4rem;

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
