import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "../lib/utils";

export const specialChars = "*#@$%^&";

type NewUerInfo = {
  email: string;
  password: string;
};

type SignUpError = {
  message: string;
  target: string;
};

const newUser = z
  .object({
    email: z.string().email({ message: "Not a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must contain at least 6 characters" })
      .refine(
        (pass) => specialChars.split("").some((char) => pass.includes(char)),
        "Must contain a special character",
      ),
    confirmPassword: z.string(),
    terms: z
      .string()
      .nullable()
      .refine((item) => item === "1", "You need to accept our terms"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const mutate = ({ email, password }: NewUerInfo) => {
  return supabase.auth.signUp({ email: email, password: password });
};

//--> Dummy Validation

export const useSignUp = () => {
  const [errors, setErrors] = useState<SignUpError[] | null>(null);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: mutate,
    onSuccess: () => {
      navigate({ to: "/search" });
    },
  });

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      terms: formData.get("terms"),
    };

    const zodErrors = newUser.safeParse(userData).error?.errors;

    if (zodErrors) {
      const errArr = zodErrors.map((err) => {
        return { message: err.message, target: err.path[0] as string };
      });
      setErrors(errArr);
      return;
    }

    //--> This data was ensured to be string o the safeParse Block
    mutation.mutate({
      email: userData.email as string,
      password: userData.password as string,
    });
    //<--
  };

  const errorIndexes = {
    emailIndex: errors?.findIndex((err) => err.target === "email") ?? -1,
    passwordIndex: errors?.findIndex((err) => err.target === "password") ?? -1,
    confirmPasswordIndex:
      errors?.findIndex((err) => err.target === "confirmPassword") ?? -1,
    termsIndex: errors?.findIndex((err) => err.target === "terms") ?? -1,
  };

  const removeErrorFromInput = (errorIndex: number) => {
    if (errorIndex >= 0) {
      const filteredErrors = errors?.filter(
        (err, index) => index !== errorIndex,
      );
      setErrors(filteredErrors as SignUpError[]);
    }
  };

  return { handleSignUp, errors, errorIndexes, removeErrorFromInput };
};

//<--
