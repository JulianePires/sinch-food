import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1rem;

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
  }

  @media (min-width: 1080px) {
    height: 21.2rem;
  }
`;
