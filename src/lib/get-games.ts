import { Game } from "../types";

// const apiKey = import.meta.env.VITE_MOBY_GAMES_API_KEY;
const url = import.meta.env.VITE_BASE_GAMES_URL;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": `${import.meta.env.VITE_RAPID_API_KEY}`,
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export async function getGames(title: string = "", category: string = "all") {
  const searchParams = new URLSearchParams();
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
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data: Game[] = await res.json();

    if (title) {
      const filteredData = data.filter((game) =>
        game.title.toLowerCase().includes(title),
      );
      return filteredData;
    }

    return data;
    //--> Re-throw errors because is needed in order that React-Query be abble to capture it
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("Uh! oh! Something just explode in our side");
  }

  //<--
}
