import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { SignInForm } from "../components/auth/sign-in-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export const Route = createLazyFileRoute("/sign-in")({
  component: Login,
});

export function Login() {
  return (
    <section className="flex h-screen place-content-center items-center">
      <Card>
        <CardHeader className="flex-col space-y-2">
          <Link className="text-3xl font-bold text-primary" to="/">
            Gamor
          </Link>
          <CardTitle className="text-base">
            Enter to your account to unlock the Gamor's magic
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
        <CardFooter className="items-center">
          <p className="text-center text-sm font-light text-foreground/50">
            Do not have an account?{" "}
            <Link
              to="/sign-up"
              className="font-medium text-foreground/80 hover:underline"
            >
              Create One
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
