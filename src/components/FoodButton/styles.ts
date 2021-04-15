import styled from "styled-components";

export const Food = styled.button`
  width: 6rem;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem;

  background: transparent;
  border: 1px solid var(--details);
  color: var(--details);

  font-size: 1rem;

  &:hover {
    color: var(--hover);
    border: 1px solid var(--hover);
  }

  &:focus-within {
    background: var(--hoverBackground);
    font-weight: 600;
  }
`;
