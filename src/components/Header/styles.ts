import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding: 1rem 1.5rem;

  background: var(--primaryDark);
  color: var(--onDark);

  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button {
    background: none;
    border: none;
    color: var(--onDark);
    font-size: 1.2rem;
  }

  span {
    display: flex;

    img {
      height: 2rem;
      margin-right: 1rem;
    }
  }

  @media (min-width: 1080px) {
    padding: 1rem 3rem;
    font-size: 1.5rem;

    button {
      &:first-child {
        display: hidden;
        color: transparent;
        cursor: none;
      }
    }
  }
`;
