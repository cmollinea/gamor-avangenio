import { useContext } from "react";
import { MobileNavigationContext } from "../context";

export const useMobileNavigationContext = () => {
  const ctx = useContext(MobileNavigationContext);

  if (!ctx) {
    throw new Error(
      "useMobileNavigationContext must be used within a provider",
    );
  }
  return ctx;
};
