import { useSignIn } from "../../hooks/use-sign-in";
import { LoginIcon, Mail, Password } from "../icons";

export const SignInForm = () => {
  const { handleSubmit, isPending } = useSignIn();

  return (
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
  );
};
