import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

import { lightTheme as light } from "./styles/themes/light";
import { darkTheme as dark } from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
