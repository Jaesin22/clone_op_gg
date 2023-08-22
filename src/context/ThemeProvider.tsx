import React, { useContext, useState, useCallback, useEffect } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Error");
  }

  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const LocalTheme = window.localStorage.getItem("theme") || false;
  const [isDarkMode, setIsDarkMode] = useState(LocalTheme === "true");

  const toggleMode = useCallback(() => {
    setIsDarkMode((mode) => !mode);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
