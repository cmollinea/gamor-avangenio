import { Game } from "../types";

class MobyGamesError extends Error {}
// const apiKey = import.meta.env.VITE_MOBY_GAMES_API_KEY;
const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "168a1b8c8dmsh39e44b46606f62bp1cba86jsnf30363bd75ba",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export async function getGames(title: string = "", category: string = "all") {
  const searchParams = new URLSearchParams();
  console.log(title);
  let endpoint = url;

  if (category !== "all") {
    const parsedCategory =
      category.split(" ").length > 0
        ? category.split(" ").join("-").toLowerCase()
        : category;
    searchParams.set("category", parsedCategory.toString());

    endpoint = url + "?" + searchParams.toString();
  }

  try {
    const res = await fetch(endpoint, options);
    if (!res.ok) {
      const error = await res.json();
      throw new MobyGamesError(`Error ${error.code}: ${error.message}`);
    }

    const data: Game[] = await res.json();

    if (title) {
      const filteredData = data.filter((game) =>
        game.title.toLowerCase().includes(title),
      );
      return filteredData;
    }

    return data;
  } catch (err) {
    if (err instanceof MobyGamesError) {
      return { error: err.message };
    }
    if (err instanceof Error) {
      return { error: `${err.name}: ${err.message}` };
    }

    return { error: "Uh! oh! Something just explode in our side" };
  }
}
