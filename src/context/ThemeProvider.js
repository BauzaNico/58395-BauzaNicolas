import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
