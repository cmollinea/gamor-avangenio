import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useSignUp } from "../hooks/use-sign-up";

export const Route = createLazyFileRoute("/sign-up")({
  component: () => <SignUp />,
});

const SignUp = () => {
  const { handleSignUp, removeErrorFromInput, errorIndexes, errors } =
    useSignUp();

  const { emailIndex, passwordIndex, confirmPasswordIndex, termsIndex } =
    errorIndexes;

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
          <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
                <sup className="font-bold text-primary">*</sup>
              </label>
              <div>
                <input
                  onFocus={() => removeErrorFromInput(emailIndex)}
                  // Using input type = text in order to disable the html validation
                  type="text"
                  name="email"
                  id="email"
                  inputMode="email"
                  className={`w-full rounded-xl border border-foreground/20 bg-background p-2 pr-10 transition-colors ease-in-out focus:border-primary focus:outline-none ${emailIndex >= 0 ? "border-red-500" : ""}`}
                  placeholder="name@company.com"
                />
                {emailIndex >= 0 && errors ? (
                  <span className="text-xs text-red-500">
                    {errors[emailIndex].message}
                  </span>
                ) : null}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
                <sup className="font-bold text-primary">*</sup>
              </label>
              <div>
                <input
                  onFocus={() => removeErrorFromInput(passwordIndex)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="A secure password"
                  className={`w-full rounded-xl border border-foreground/20 bg-background p-2 pr-10 transition-colors ease-in-out focus:border-primary focus:outline-none ${passwordIndex >= 0 ? "border-red-500" : ""}`}
                />
                {passwordIndex >= 0 && errors ? (
                  <span className="text-xs text-red-500">
                    {errors[passwordIndex].message}
                  </span>
                ) : null}
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
                <sup className="font-bold text-primary">*</sup>
              </label>
              <div>
                <input
                  onFocus={() => removeErrorFromInput(confirmPasswordIndex)}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Same as above"
                  className={`w-full rounded-xl border border-foreground/20 bg-background p-2 pr-10 transition-colors ease-in-out focus:border-primary focus:outline-none ${confirmPasswordIndex >= 0 ? "border-red-500" : ""}`}
                />
                {confirmPasswordIndex >= 0 && errors ? (
                  <span className="text-xs text-red-500">
                    {errors[confirmPasswordIndex].message}
                  </span>
                ) : null}
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1 pl-2">
                <input
                  onFocus={() => removeErrorFromInput(termsIndex)}
                  id="terms"
                  name="terms"
                  aria-describedby="terms"
                  type="checkbox"
                />
                <label
                  htmlFor="terms"
                  className={`font-light ${termsIndex >= 0 ? "text-red-500" : ""}`}
                >
                  I accept the{" "}
                  <Link
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                    href="#"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              {termsIndex >= 0 && errors ? (
                <span className="text-xs text-red-500">
                  {errors[termsIndex].message}
                </span>
              ) : null}
            </div>
            <button
              type="submit"
              className="flex w-full place-content-center items-center space-x-0.5 rounded-xl bg-primary p-2 transition-colors ease-in-out hover:bg-primary/80"
            >
              Create an account
            </button>
          </form>
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
