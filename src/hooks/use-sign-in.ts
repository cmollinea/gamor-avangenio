import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "../lib/utils";

type UserData = {
  email: string;
  password: string;
};

async function mutate({ email, password }: UserData) {
  return supabase.auth.signInWithPassword({
    email: email as string,
    password: password as string,
  });
}

/**
 * Hook for managing sign-in functionality using Supabase authentication.
 *
 * @returns An object containing:
 * - `handleSubmit`: A function to handle the sign-in process. Prevents default form submission, collects form data, and attempts to sign in the user.
 * - `isPending`: A boolean indicating if the sign-in operation is still pending.
 */

export const useSignIn = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: mutate,
    onError: (err) => console.log(err.message),
    onSuccess: (data) => {
      if (data.data.session) {
        navigate({ to: "/search" });
      }

      if (data.error) {
        console.log(data.error);
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const [email, password] = [formData.get("email"), formData.get("password")];
    if (typeof email !== "string" || typeof password !== "string") {
      return;
    }
    mutation.mutate({ email, password });
  };

  return { handleSubmit, isPending: mutation.isPending };
};
