import { Link } from "@tanstack/react-router";
import { navigation } from "../../constants/index.ts";
import { useThemeContext } from "../../hooks/use-theme-context.ts";

export const Navbar = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <header className="sticky top-0 z-50 flex place-content-center bg-background/80 py-4 text-lg font-medium backdrop-blur-lg transition-colors ease-in-out">
      <div className="container flex items-center justify-between px-10 lg:px-4">
        <nav className="flex w-full space-x-6 max-lg:hidden">
          {navigation.general.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="hover:text-primary/60 [&.active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <h3 className="w-full font-bold lg:text-center">Gamor</h3>
        <nav className="flex w-full place-content-end items-center space-x-6 self-end">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-10 w-10 rounded-xl bg-card-background active:scale-75"
          >
            +
          </button>
          <Link
            key={navigation.auth[0].label}
            to={navigation.auth[0].href}
            className="hover:text-primary/60 max-lg:hidden [&.active]:text-primary"
          >
            {navigation.auth[0].label}
          </Link>

          <Link
            key={navigation.auth[1].label}
            to={navigation.auth[1].href}
            className="rounded-full bg-button-primary p-3 text-button-primary-foreground max-lg:hidden"
          >
            {navigation.auth[1].label}
          </Link>
        </nav>
      </div>
    </header>
  );
};
