import { createLazyFileRoute } from "@tanstack/react-router";
import { Login } from "../components/auth/login";

export const Route = createLazyFileRoute("/sign-in")({
  component: Login,
});
