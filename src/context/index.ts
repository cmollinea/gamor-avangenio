import { createContext } from "react";

type ThemeContext = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
} | null;

export const themeContext = createContext<ThemeContext>(null);
