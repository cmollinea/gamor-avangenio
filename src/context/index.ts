import { Session, User } from "@supabase/supabase-js";
import { createContext } from "react";

type ThemeContext = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
} | null;

type UsersContext = {
  users: string[];
  addUser: (user: string) => void;
  removeUser: (user: string) => void;
} | null;

export interface AuthContext {
  user: User | null;
  session: Session | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}

export const ThemeContext = createContext<ThemeContext>(null);
export const UsersContext = createContext<UsersContext>(null);
export const AuthContext = createContext<AuthContext | null>(null);
