import { useContext } from "react";
import { UsersContext } from "../context";

export const useUsersContext = () => {
  const ctx = useContext(UsersContext);

  if (!ctx) {
    throw new Error("useUsersContext must be used within UsersProvider");
  }

  return ctx;
};
