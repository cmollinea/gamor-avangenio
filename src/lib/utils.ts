import { createClient } from "@supabase/supabase-js";
import { queryOptions } from "@tanstack/react-query";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getGames } from "./get-games";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function generateQueryOption(
  title: string = "",
  category: string = "all",
) {
  const gameQueryOptions = queryOptions({
    queryKey: ["games", title, category],
    queryFn: () => getGames(title, category),
    retry: 3,
  });
  return gameQueryOptions;
}
