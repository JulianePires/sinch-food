import styled from "styled-components";

export const Message = styled.button`
  width: 7.5rem;
  padding: 0.2rem;

  background: transparent;
  border: 1px solid var(--navyBlue);

  font-size: 1rem;

  &:hover {
    color: var(--blue);
    border: 1px solid var(--blue);
  }

  @media (min-width: 720px) {
    width: auto;
    padding: 0.5rem 1rem;
  }
`;
