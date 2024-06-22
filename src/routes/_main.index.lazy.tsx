import { createLazyFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/home/hero";
import { TrendingCategories } from "../components/home/trending-categories";

export const Route = createLazyFileRoute("/_main/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex flex-col place-content-center items-center py-16">
      <div className="container w-full space-y-20 md:px-4">
        <Hero />
        <TrendingCategories />
      </div>
    </main>
  );
}
