import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { GameCard } from "../components/search/game-card";
import { Spinner } from "../components/ui/spinner";
import { generateQueryOption } from "../lib/utils";

const GamesFilterSchema = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
});

export const Route = createFileRoute("/_auth/search")({
  validateSearch: (search) => GamesFilterSchema.parse(search),

  loaderDeps: ({ search: { title, category } }) => ({ title, category }),

  loader: async ({ context, deps: { title, category } }) => {
    const gameQueryOptions = generateQueryOption(title, category);
    return context.queryClient.ensureQueryData(gameQueryOptions);
  },

  errorComponent: (error) => <p>{error.error.message}</p>,

  pendingComponent: () => (
    <div className="flex h-[calc(100vh-200px)] place-content-center items-center">
      <Spinner />
    </div>
  ),

  pendingMs: 0,
});

export function Games() {
  const { title, category } = Route.useSearch();

  const gamesQueryOptions = generateQueryOption(title, category);

  const { data } = useSuspenseQuery({ ...gamesQueryOptions });

  return (
    <>
      {!("error" in data) && (
        <>
          <h2 className="text-2xl font-medium">
            Showing {data.length} results for you
          </h2>
          <div className="mx-auto grid w-fit justify-center gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {data.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
