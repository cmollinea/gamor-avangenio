import { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
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
});
