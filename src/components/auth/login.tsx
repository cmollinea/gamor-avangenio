import { supabase } from "../../lib/utils";

async function handleSubmit(e: any) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const [email, password] = [formData.get("email"), formData.get("password")];

  if (email !== null && password !== null) {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email as string,
        password: password as string,
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export const Login = () => {
  return (
    <div className="flex h-screen place-content-center items-center">
      <form className="grid gap-10" onSubmit={handleSubmit}>
        <input
          className="text-black placeholder:text-black"
          placeholder="email"
          name="email"
          type="text"
        />
        <input
          className="text-black placeholder:text-black"
          placeholder="password"
          name="password"
          type="text"
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
