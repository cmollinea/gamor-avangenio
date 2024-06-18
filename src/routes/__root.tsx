import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from "../components/home/navbar";
import { useAuth } from "../hooks/use-auth-context";
import { supabase } from "../lib/utils";

interface RouteWithContext {
  authContext: ReturnType<typeof useAuth>;
}

export const Route = createRootRouteWithContext<RouteWithContext>()({
  component: () => (
    <>
      <Navbar />
      <section className="space-y-20">
        <Outlet />
      </section>
      <TanStackRouterDevtools />
    </>
  ),
  loader: async ({ context }) => {
    const setSession = context.authContext?.setSession;
    const setUser = context.authContext?.setUser;
    if (setSession && setUser) {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setUser(data.session?.user ?? null);
    }
  },
});
