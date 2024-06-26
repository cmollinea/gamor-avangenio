import { Link } from "@tanstack/react-router";

export const NotFound = () => {
  return (
    <section className="flex h-screen flex-col place-content-center items-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p>The page that you looking doesn't exist</p>
      <Link className="mt-10 text-primary underline" to="/">
        Go Home
      </Link>
    </section>
  );
};
