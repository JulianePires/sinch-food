import styled from "styled-components";

export const CloseButton = styled.button`
  float: right;
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

export const Container = styled.section`
  margin-top: 0.5rem;
  display: grid;
  grid-template-rows: repeat(1fr, 6);
  row-gap: 0.5rem;
`;
