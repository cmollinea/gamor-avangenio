import { Link } from "@tanstack/react-router";
import { navigation } from "../../constants/index.ts";
import { useAuth } from "../../hooks/use-auth-context.ts";
import { useThemeContext } from "../../hooks/use-theme-context.ts";
import { MenuButton } from "./sm-navigation.tsx";
import { ThemeToggle } from "./theme-toggle.tsx";

export const Navbar = () => {
  const { theme } = useThemeContext();
  const { session } = useAuth();

  return (
    <header className="sticky top-0 z-50 flex place-content-center bg-background/80 py-4 text-lg font-medium backdrop-blur-lg transition-colors ease-in-out">
      <div className="container flex items-center justify-between px-10 lg:px-4">
        <nav className="flex w-full space-x-3 max-lg:hidden">
          {navigation.general.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              activeProps={{
                style: {
                  backgroundImage:
                    theme === "dark"
                      ? "url(/doodles/active-doodle-dark.svg)"
                      : "url(/doodles/active-doodle.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                  backgroundPosition: "bottom",
                  color: theme === "dark" ? "#FF871F" : "#6730A1",
                },
              }}
              className="p-2 hover:text-primary/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <h3 className="w-full font-bold lg:text-center">Gamor</h3>

        <div className="flex w-full place-content-end items-center space-x-6">
          <div className="space-x-2">
            <ThemeToggle />
            <MenuButton />
          </div>
          <nav className="flex place-content-end items-center space-x-6 self-end max-lg:hidden">
            {session ? (
              <Link
                from="/"
                to="/search"
                className="rounded-full bg-button-primary p-3 text-button-primary-foreground"
              >
                Dashboard
              </Link>
            ) : (
              <>
                {" "}
                <Link
                  key={navigation.auth[0].label}
                  from="/"
                  to="/sign-in"
                  className="hover:text-primary/60 [&.active]:text-primary"
                >
                  {navigation.auth[0].label}
                </Link>
                <Link
                  key={navigation.auth[1].label}
                  from="/"
                  to="/sign-up"
                  className="rounded-full bg-button-primary p-3 text-button-primary-foreground"
                >
                  {navigation.auth[1].label}
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
