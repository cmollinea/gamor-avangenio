import { Link } from "@tanstack/react-router";
import { navigation } from "../../constants/index.ts";
import { useAuth } from "../../hooks/use-auth-context.ts";
import { useMobileNavigationContext } from "../../hooks/use-mobile-navigation-context.ts";
import { Close, MenuIcon } from "../icons";

export const MenuButton = () => {
  const { handleOpenNav } = useMobileNavigationContext();

  return (
    <button
      onClick={handleOpenNav}
      className="over rounded-xl bg-card-background p-2 active:scale-75 lg:hidden"
    >
      <MenuIcon />
    </button>
  );
};

export const NavigationOverlay = () => {
  const { openNav, handleCloseNav, navRef } = useMobileNavigationContext();
  const { session } = useAuth();

  return (
    <>
      {openNav ? (
        <div
          ref={navRef}
          className="fade-in-element fixed bottom-0 left-0 right-0 top-0 z-[99] flex place-content-center items-center bg-background/90 opacity-0 backdrop-blur-sm"
        >
          <button
            className="absolute right-6 top-6 transition-colors ease-in-out hover:text-red-500"
            onClick={handleCloseNav}
          >
            <Close />
          </button>
          <nav className="flex flex-col place-content-center items-center space-y-6 text-3xl font-bold">
            {navigation.general.map((item) => (
              <Link
                onClick={handleCloseNav}
                key={item.label}
                to={item.href}
                activeProps={{ className: "text-primary" }}
                className="p-2 hover:text-primary/60"
              >
                {item.label}
              </Link>
            ))}
            {session ? (
              <Link
                onClick={handleCloseNav}
                to="/search"
                activeProps={{ className: "text-primary" }}
                className="rounded-full bg-button-primary p-3 text-button-primary-foreground"
              >
                Dashboard
              </Link>
            ) : (
              <>
                {navigation.auth.map((item) => (
                  <Link
                    onClick={handleCloseNav}
                    key={item.label}
                    to={item.href}
                    activeProps={{ className: "text-primary" }}
                    className={`${item.href === "/sign-up" ? "rounded-full bg-button-primary p-3 text-button-primary-foreground" : "p-2 hover:text-primary/60"}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            )}
          </nav>
        </div>
      ) : null}
    </>
  );
};
