import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1rem;

  transition: all 0.2s;

  h1 {
    font-weight: 400;
    height: 2rem;
  }
`;

export const RelatoriesTable = styled.table`
  width: 100%;
  height: 30rem;
  margin-top: 2rem;

  thead tr {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    margin: 0;
  }

  @media (min-width: 1080px) {
    height: 21.2rem;
  }
`;

export const Line = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  margin: 1rem 0;

  td {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const OpenModal = styled.button`
  background: none;
  border: none;
  color: var(--details);

  &:hover {
    color: var(--hover);
  }
`;
