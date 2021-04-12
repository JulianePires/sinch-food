import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1rem;

  h1 {
    font-weight: 400;
    height: 2rem;
  }
`;

export const ContactsTable = styled.table`
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

export const Controllers = styled.section`
  width: 100%;
  margin-top: 1rem;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 7rem;
    padding: 0.5rem 1rem;

    background: transparent;
    border: 1px solid var(--navyBlue);

    font-size: 1rem;

    &:hover {
      color: var(--blue);
      border: 1px solid var(--blue);
    }
  }
`;
