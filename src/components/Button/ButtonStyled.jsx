import styled from 'styled-components';

export const ButtonStyled = styled.button`
  cursor: pointer;
  color: currentColor;
  background: transparent;
  border: none;
  text-decoration: none;
  font-weight: var(--fw-bold);

  border-bottom: 3px solid var(--clr-accent-400);
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    color: var(--clr-accent-400);
  }

  &.button--fill {
    background-color: vaR(--clr-accent-400);
    padding: 1rem 1.5rem;
    border: 2px solid var(--clr-accent-400);
    color: var(--clr-primary-400);

    &:hover {
      background-color: transparent;
      color: var(--clr-accent-400);
    }
  }
`;
