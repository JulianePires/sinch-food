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

export const ContactsTable = styled.table`
  width: 100%;
  height: 30rem;
  padding: 0.5rem;

  margin-top: 2rem;

  overflow: auto;
  display: grid;

  thead {
    margin-bottom: 0.5rem;

    tr {
      display: grid;
      grid-template-columns: 1fr 2fr 2fr;

      td {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (min-width: 1080px) {
    height: 22rem;
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
    border: 1px solid var(--details);
    color: var(--details);

    font-size: 1rem;

    &:hover {
      color: var(--hover);
      border: 1px solid var(--hover);
    }
  }
`;
