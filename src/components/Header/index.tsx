import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { Container } from "./styles";

import logo from "../../assets/logo-big.svg";

interface HeaderProps {
  openSideNav: () => void;
}

export function Header({ openSideNav }: HeaderProps) {
  const { handleChangeTheme } = useContext(ThemeContext);

  return (
    <Container>
      <button onClick={openSideNav}>
        <i className="fas fa-align-justify"></i>
      </button>
      <span>
        <img src={logo} alt="sinch food" />
        <p>Sinch Food</p>
      </span>
      <button onClick={handleChangeTheme}>
        <i className="fas fa-adjust"></i>
      </button>
    </Container>
  );
}
