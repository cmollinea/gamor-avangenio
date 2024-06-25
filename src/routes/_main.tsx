import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/home/navbar";
import { NavigationOverlay } from "../components/home/sm-navigation";

export const Route = createFileRoute("/_main")({
  component: () => (
    <>
      <NavigationOverlay />
      <Navbar />
      <section className="space-y-20">
        <Outlet />
      </section>
    </>
  ),
});
