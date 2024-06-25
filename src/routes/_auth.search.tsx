import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Empty, SadFace } from "../components/icons";
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

  errorComponent: (error) => (
    <div className="flex flex-col items-center space-y-6 p-2 text-center text-red-500">
      <SadFace />{" "}
      <p>
        {error.error.message} <br /> Maybe you just need a VPN :/
      </p>
    </div>
  ),

  pendingComponent: () => (
    <div className="flex place-content-center items-center md:h-[calc(100vh-200px)]">
      <Spinner />
    </div>
  ),

  pendingMs: 0,
});

//--> Export this component to be used in the lazy segment

export function Games() {
  const { title, category } = Route.useSearch();

  const gamesQueryOptions = generateQueryOption(title, category);

  const { data, error } = useSuspenseQuery({ ...gamesQueryOptions });

  return (
    <>
      {data.length > 0 ? (
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
      ) : (
        <div className="flex flex-col items-center space-y-6 p-2">
          <Empty />
          <p className="text-center">
            No games found for your query. Please try adjusting your filters and
            search again.
          </p>
        </div>
      )}

      {error && <p>{error.message}</p>}
    </>
  );
}

//<--
