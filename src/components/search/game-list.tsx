import { Game } from "../../types";
import { GameCard } from "./game-card";

type Props = {
  games: Game[];
};

export const GameList = ({ games }: Props) => {
  return (
    <>
      <h2 className="text-2xl font-medium">
        Showing {games.length} results for you
      </h2>
      <ul className="mx-auto grid w-fit justify-center gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {games.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </>
  );
};
