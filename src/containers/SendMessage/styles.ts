import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1rem 1.5rem;

  h1 {
    font-weight: 400;
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 1.3rem;
  }

  section {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
  }

  textarea {
    width: 100%;
    margin-top: 1rem;
    height: 6rem;

    padding: 1rem;
  }
`;

export const Controllers = styled.section`
  width: 100%;
  margin-top: 2rem;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: auto;
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
