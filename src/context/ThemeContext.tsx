import { createContext, useState, ReactNode } from "react";

interface ThemeContextData {
  theme: string;
  handleChangeTheme(): void;
}

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");

  function handleChangeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
