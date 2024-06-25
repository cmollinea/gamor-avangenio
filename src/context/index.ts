import { Session, User } from "@supabase/supabase-js";
import { createContext } from "react";

export type Theme = "light" | "dark" | "system";

type ThemeContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

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

export interface MobileNavigationContext {
  openNav: boolean;
  handleOpenNav: () => void;
  handleCloseNav: () => void;
  navRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: "system",
  setTheme: () => null,
});
export const UsersContext = createContext<UsersContext>(null);
export const AuthContext = createContext<AuthContext | null>(null);
export const MobileNavigationContext =
  createContext<MobileNavigationContext | null>(null);
