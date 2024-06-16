import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Navbar } from "../components/home/navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <section className="space-y-20">
        <Outlet />
      </section>
      <TanStackRouterDevtools />
    </>
  ),
});
