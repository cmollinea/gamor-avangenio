import { Link } from "@tanstack/react-router";
import { useSignIn } from "../../hooks/use-sign-in";
import { LoginIcon, Mail, Password } from "../icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const Login = () => {
  const { handleSubmit, isPending } = useSignIn();
  return (
    <div className="flex h-screen place-content-center items-center">
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
          <form className="grid gap-10" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="pl-1" htmlFor="email">
                E-Mail
              </label>
              <div className="relative">
                <input
                  id="email"
                  className="w-full rounded-xl border border-foreground/20 bg-background p-2 pr-10 transition-colors ease-in-out focus:border-primary focus:outline-none"
                  placeholder="avangenio@gmail.com"
                  name="email"
                  type="text"
                  inputMode="email"
                />
                <span className="absolute bottom-0 right-4 top-0 flex place-content-center items-center text-foreground/50">
                  <Mail />
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="pl-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  className="w-full rounded-xl border border-foreground/20 bg-background p-2 pr-10 transition-colors ease-in-out focus:border-primary focus:outline-none"
                  placeholder="Your password"
                  name="password"
                  type="password"
                />
                <span className="absolute bottom-0 right-4 top-0 flex place-content-center items-center text-foreground/50">
                  <Password />
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="flex w-full place-content-center items-center space-x-0.5 rounded-xl bg-primary p-2 transition-colors ease-in-out hover:bg-primary/80"
            >
              {isPending ? (
                "Loading"
              ) : (
                <>
                  <LoginIcon /> Sign In
                </>
              )}
            </button>
          </form>
        </CardContent>
        <CardFooter className="items-center">
          <p className="w-fit text-sm">
            Do not have an account?{" "}
            <Link
              from="/sign-in"
              to="/sign-up"
              className="text-primary underline"
            >
              Create one
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
