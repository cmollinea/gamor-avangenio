import { createLazyFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "../components/ui/coming-soon";

export const Route = createLazyFileRoute("/_main/party")({
  component: () => <ComingSoon />,
});
