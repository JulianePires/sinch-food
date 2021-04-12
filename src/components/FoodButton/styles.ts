import styled from "styled-components";

export const Food = styled.button`
  width: 6rem;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem;

  background: transparent;
  border: 1px solid var(--navyBlue);

  font-size: 1rem;

  &:hover {
    color: var(--blue);
    border: 1px solid var(--blue);
  }

  &:focus-within {
    background: #c4c4c4;
    font-weight: 600;
  }
`;
