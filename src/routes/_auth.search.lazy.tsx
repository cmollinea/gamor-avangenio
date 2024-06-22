import { createLazyFileRoute } from "@tanstack/react-router";
import { memo } from "react";
import { Games } from "./_auth.search";

const MemoizedGames = memo(Games);

export const Route = createLazyFileRoute("/_auth/search")({
  component: () => <MemoizedGames />,
});
