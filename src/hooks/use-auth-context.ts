import { useContext } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return ctx;
};
