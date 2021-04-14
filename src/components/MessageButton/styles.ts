import styled from "styled-components";

export const Message = styled.button`
  width: auto;
  padding: 0.5rem;
  margin: 0.5rem;

  background: transparent;
  border: 1px solid var(--details);

  font-size: 1rem;

  &:hover {
    color: var(--hover);
    border: 1px solid var(--hover);
  }

  &:focus {
    background: var(--hoverBackground);
    font-weight: 600;
  }

  @media (min-width: 720px) {
    width: auto;
    padding: 0.5rem 1rem;
  }
`;
