import React from "react";
export interface ThemeContextType {
  isDarkMode: boolean;
  toggleMode: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export default ThemeContext;
