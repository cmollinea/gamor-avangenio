import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/home/navbar";

export const Route = createFileRoute("/_main")({
  component: () => (
    <>
      <Navbar />
      <section className="space-y-20">
        <Outlet />
      </section>
    </>
  ),
});
