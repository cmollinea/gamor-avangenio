import { useEffect, useRef, useState } from "react";
import { ThemeContext } from ".";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const firstRender = useRef(true);
  const html = document.getElementsByTagName("html");

  const currentTheme =
    html && html[0].classList.contains("dark") ? "dark" : "light";

  const [theme, setTheme] = useState<"light" | "dark">(currentTheme);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (currentTheme === "light") {
      html[0].classList.add("dark");
    } else {
      html[0].classList.remove("dark");
    }
  }, [theme, currentTheme, html]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
