import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1rem 1.5rem;

  transition: all 0.2s;

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 1.3rem;
  }

  section {
    width: 100%;
    margin-top: 1rem;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  textarea {
    width: 100%;
    margin-top: 1rem;
    height: 6rem;

    padding: 1rem;
  }
  @media (min-width: 1080px) {
    section {
      justify-content: space-between;
    }

    textarea {
      height: 4rem;
    }
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
