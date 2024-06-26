import { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { NotFound } from "../components/ui/not-found";
import { useAuth } from "../hooks/use-auth-context";

interface RouteWithContext {
  authContext: ReturnType<typeof useAuth>;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouteWithContext>()({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  notFoundComponent: NotFound,
});
