import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1rem;

  h1 {
    font-weight: 400;
  }
`;

export const ContactsTable = styled.table`
  width: 100%;
  margin-top: 2rem;

  thead tr {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
  }
`;
