import { useThemeContext } from "../../hooks/use-theme-context.ts";
import { Moon, Sun } from "../icons/index.tsx";

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-xl bg-card-background p-2 active:scale-75"
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
};
