import styled from "styled-components";

export const Food = styled.button`
  width: auto;
  padding: 0.5rem 1rem;

  background: transparent;
  border: 1px solid var(--navyBlue);

  font-size: 1rem;

  &:hover {
    color: var(--blue);
    border: 1px solid var(--blue);
  }
`;
