import styled from "styled-components";

export const Message = styled.button`
  width: auto;
  padding: 0.5rem;
  margin: 0.5rem;

  background: transparent;
  border: 1px solid var(--navyBlue);

  font-size: 1rem;

  &:hover {
    color: var(--blue);
    border: 1px solid var(--blue);
  }

  &:focus {
    background: #c4c4c4;
    font-weight: 600;
  }

  @media (min-width: 720px) {
    width: auto;
    padding: 0.5rem 1rem;
  }
`;
