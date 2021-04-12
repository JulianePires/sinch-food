import styled from "styled-components";

interface SideNavProps {
  isOpen: boolean;
}

export const SideNav = styled.nav<SideNavProps>`
  width: 60%;
  height: 100%;

  padding: 2rem 1rem;

  position: absolute;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-60%")};
  z-index: 100;

  background: var(--primaryLight);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  transition: all 0.8s ease;

  button {
    width: 2rem;

    margin: 0.5rem;
    padding: auto;

    background: none;
    border: none;

    font-size: 1.2rem;
    color: var(--navyBlue);
    font-weight: 600;
  }

  img {
    width: 100%;
  }

  a {
    margin: 0.2rem 0.5rem;
    font-size: 1rem;

    transition: color 0.2s;

    &:hover {
      color: var(--blue);
    }
  }

  @media (min-width: 768px) {
    padding: 0.8rem 2rem;
    a {
      font-size: 1.2rem;
    }

    img {
      width: 80%;
    }
  }

  @media (min-width: 1080px) {
    position: relative;
    left: 0;
    width: 15rem;
    height: 100vh;

    button {
      display: none;
    }

    a {
      font-size: 1rem;
    }
  }
`;
