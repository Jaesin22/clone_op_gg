import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleMode: () => void;
}

const ThemeContext = createContext({});

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  const { isDarkMode, setIsDarkMode }: any = context;

   const toggleMode = useCallback(() => {
    if (!isDarkMode) {
      setIsDarkMode(isDarkMode);
    }
    else {
      setIsDarkMode(!isDarkMode)
    };
  }, [isDarkMode]);
  
  return [ isDarkMode, toggleMode];
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeContextValue: ThemeContextType = {
    isDarkMode,
    toggleMode,
  };

  return (
    // <ThemeContext.Provider value={themeContextValue}>
    //   {children}
    // </ThemeContext.Provider>
  );
};
