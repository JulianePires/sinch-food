import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding: 1rem 1.5rem;

  background: var(--contrastText);
  color: var(--main);

  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  transition: all 0.2s;

  button {
    background: none;
    border: none;
    color: var(--white);
    font-size: 1.2rem;

    &:hover {
      color: var(--hover);
    }
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
