import { createLazyFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "../components/ui/coming-soon";

export const Route = createLazyFileRoute("/_main/get-premium")({
  component: () => <ComingSoon />,
});
