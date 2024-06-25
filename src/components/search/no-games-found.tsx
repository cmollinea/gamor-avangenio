import { Empty } from "../icons";

export const NoGamesFound = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-2">
      <Empty />
      <p className="text-center">
        No games found for your query. Please try adjusting your filters and
        search again.
      </p>
    </div>
  );
};
