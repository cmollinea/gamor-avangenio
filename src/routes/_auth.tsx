import { Session, User } from "@supabase/supabase-js";
import {
  Link,
  Outlet,
  createFileRoute,
  redirect,
} from "@tanstack/react-router";
import { SearchFilters } from "../components/search/search-filters";
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

      if (error) {
        throw new Error(error.message);
      }

      if (!data.session) {
        throw redirect({
          to: "/",
        });
      }

      setSession(data.session);
      setUser(data.session?.user ?? null);
    }
  },
});

function SearchLayout() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <section className="flex w-full max-md:flex-col md:h-screen md:overflow-hidden">
        {isDesktop ? (
          <aside className="flex w-full max-w-[250px] flex-col items-center space-y-8 bg-card-background px-4 py-6 shadow-md">
            <Link to="/" className="px-10 text-2xl font-bold">
              Gamor
            </Link>
            <SearchFilters />
          </aside>
        ) : (
          <header className="backdrop-blur-mdsticky sticky top-0 z-50 flex place-content-center bg-background/80 py-4 text-lg font-medium backdrop-blur-lg transition-colors ease-in-out">
            <Link to="/" className="px-10 text-2xl font-bold">
              Gamor
            </Link>
          </header>
        )}
        <div className="flex w-full flex-col items-center space-y-20 bg-background py-10 md:overflow-y-auto md:py-20">
          {!isDesktop && <SearchFilters />}
          <Outlet />
        </div>
      </section>
    </>
  );
}
