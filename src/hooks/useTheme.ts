import { useContext } from "react";
import { themeContext } from "../context";

export const useTheme = () => {
  const ctx = useContext(themeContext);

  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return { ...ctx };
};
