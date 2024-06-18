import { createLazyFileRoute } from "@tanstack/react-router";
import { memo } from "react";

const Search = () => {
  console.log("Search is Rendering");
  return <div>Search</div>;
};

const MemmoizedSearch = memo(Search);

export const Route = createLazyFileRoute("/search")({
  component: () => <MemmoizedSearch />,
});
