import { Container } from "./styles";
import logo from "../../assets/logo-big.svg";
import { useDispatch } from "react-redux";
import { useCallback, useState } from "react";
import { changeTheme } from "../../store/ducks/theme/actions";

interface HeaderProps {
  openSideNav: () => void;
}

export function Header({ openSideNav }: HeaderProps) {
  const [theme, setTheme] = useState("light");

  const dispatch = useDispatch();

  const Theme = useCallback(
    (name: string) => {
      dispatch(changeTheme(name));
    },
    [dispatch]
  );

  function handleToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      Theme("dark");
    } else {
      setTheme("light");
      Theme("light");
    }
  }

  return (
    <Container>
      <button onClick={openSideNav}>
        <i className="fas fa-align-justify"></i>
      </button>
      <span>
        <img src={logo} alt="sinch food" />
        <p>Sinch Food</p>
      </span>
      <button onClick={handleToggleTheme}>
        <i className="fas fa-adjust"></i>
      </button>
    </Container>
  );
}
