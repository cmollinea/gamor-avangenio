import { createLazyFileRoute } from "@tanstack/react-router";
import { Games } from "./_auth.search";

export const Route = createLazyFileRoute("/_auth/search")({
  component: () => <Games />,
});
