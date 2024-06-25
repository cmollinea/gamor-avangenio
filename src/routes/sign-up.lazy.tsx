import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { SignUpForm } from "../components/auth/sign-up-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export const Route = createLazyFileRoute("/sign-up")({
  component: () => <SignUp />,
});

const SignUp = () => {
  return (
    <section className="flex h-screen place-content-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="flex-col">
          <Link className="text-3xl font-bold text-primary" to="/">
            Gamor
          </Link>
          <CardTitle>Create an account</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter className="items-center">
          <p className="text-center text-sm font-light text-foreground/50">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="font-medium text-foreground/80 hover:underline"
            >
              Login here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};
