import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../common/Theme";

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    if (theme === lightTheme) {
      localStorage.setItem("theme", JSON.stringify(darkTheme));
      setTheme(darkTheme);
    } else {
      localStorage.setItem("theme", JSON.stringify(lightTheme));
      setTheme(lightTheme);
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(JSON.parse(localTheme));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
export default AppThemeProvider;
