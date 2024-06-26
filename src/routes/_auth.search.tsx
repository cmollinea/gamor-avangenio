import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ErrorComponent } from "../components/search/error-component";
import { GameList } from "../components/search/game-list";
import { NoGamesFound } from "../components/search/no-games-found";
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

  errorComponent: ({ error, reset }) => (
    <ErrorComponent message={error.message} reset={reset} />
  ),

  pendingComponent: () => <Spinner />,

  pendingMs: 0,
});

//--> Export this component to be used in the lazy segment

export function Games() {
  const { title, category } = Route.useSearch();

  const gamesQueryOptions = generateQueryOption(title, category);

  const { data } = useSuspenseQuery({ ...gamesQueryOptions });

  return <>{data.length > 0 ? <GameList games={data} /> : <NoGamesFound />}</>;
}

//<--
