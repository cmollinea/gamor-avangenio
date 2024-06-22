import { Game } from "../../types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  game: Game;
};

export const GameCard = ({ game }: Props) => {
  return (
    <Card
      title={`${game.title}\n\n${game.short_description}`}
      className="group relative w-full max-w-[304px] cursor-pointer select-none border border-transparent pt-0 shadow-md transition-colors ease-in-out hover:border-primary"
    >
      <CardHeader className="relative overflow-hidden p-0">
        <span className="absolute inset-0 z-10 bg-gradient-to-t from-primary/80 to-transparent" />
        <img
          src={game.thumbnail}
          decoding="async"
          loading="lazy"
          width={304}
          height={172}
          alt={`${game.title} Poster`}
          className="transition-transform ease-in-out group-hover:scale-110"
        />
        <CardTitle className="absolute bottom-4 left-6 z-20 max-w-[200px] truncate text-nowrap text-primary-foreground">
          {game.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-pretty">
        <p>
          {game.short_description.split(" ").length < 10
            ? game.short_description
            : game.short_description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </CardContent>
      <CardFooter>
        <div className="absolute bottom-3 right-3 space-x-2">
          <span className="rounded-full bg-primary/50 p-1 px-2 text-xs text-primary-foreground">
            {game.platform}
          </span>
          <span className="rounded-full bg-primary/50 p-1 px-2 text-xs text-primary-foreground">
            {game.genre}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};
