import { Session, User } from "@supabase/supabase-js";
import {
  Link,
  Outlet,
  createFileRoute,
  redirect,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SearchFilters } from "../components/search/search-filters";
import { UserAction } from "../components/search/user-action";
import { useMediaQuery } from "../hooks/use-media-quey";
import { supabase } from "../lib/utils";

export const Route = createFileRoute("/_auth")({
  component: () => <SearchLayout />,
  loader: async ({ context }) => {
    if (!context.authContext?.session) {
      const setSession = context.authContext?.setSession as React.Dispatch<
        React.SetStateAction<Session | null>
      >;
      const setUser = context.authContext?.setUser as React.Dispatch<
        React.SetStateAction<User | null>
      >;

      const { data, error } = await supabase.auth.getSession();

      if (!data.session || error) {
        throw redirect({
          to: "/",
        });
      }

      setSession(data.session);
      setUser(data.session?.user);
    }
  },
  errorComponent: (err) => <p>{err.error.message}</p>,
});

function SearchLayout() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  //-->Avoid a flicker due the fact of use javascript to control when to display an element
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  //<--

  return (
    <>
      <section className="flex w-full max-md:flex-col md:h-screen md:overflow-hidden">
        {!isFirstRender ? (
          <>
            {isDesktop ? (
              <aside className="flex w-full max-w-[250px] flex-col items-center space-y-8 border-r border-foreground/5 bg-card-background px-8 py-6 shadow-md">
                <Link to="/" className="px-10 text-2xl font-bold">
                  Gamor
                </Link>
                <SearchFilters />
                <div className="flex h-full">
                  <UserAction />
                </div>
              </aside>
            ) : (
              <header className="sticky top-0 z-50 flex items-center justify-between bg-card-background/80 px-10 py-4 text-lg font-medium backdrop-blur-md transition-colors ease-in-out">
                <Link to="/" className="text-2xl font-bold">
                  Gamor
                </Link>
                <UserAction />
              </header>
            )}
            <div className="flex w-full flex-col items-center space-y-20 bg-background py-10 md:overflow-y-auto md:py-20">
              {!isDesktop && <SearchFilters />}
              <Outlet />
            </div>
          </>
        ) : null}
      </section>
    </>
  );
}
