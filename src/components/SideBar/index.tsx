import { Link } from "react-router-dom";
import logoSinch from "../../assets/logo-sinch.png";

import { SideNav } from "./styles";

interface SideBarProps {
  isOpen: boolean;
  closeSideNav: () => void;
}

export function SideBar({ isOpen, closeSideNav }: SideBarProps) {
  return (
    <SideNav isOpen={isOpen}>
      <button onClick={closeSideNav}>X</button>
      <img src={logoSinch} alt="Logo Sinch" />
      <Link to="/">Início</Link>
      <Link to="/message">Enivar mensagem</Link>
      <Link to="/relatories">Relatório</Link>
    </SideNav>
  );
}
