import { useMutation } from "@tanstack/react-query";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "../lib/utils";
import { useAuth } from "./use-auth-context";

const mutate = () => {
  return supabase.auth.signOut();
};

/**
 * Hook that provides user-related actions such as logging out and toggling the panel.
 *
 * @returns An object containing:
 * - `showPanel`: A boolean indicating whether the user panel should be shown or hidden.
 * - `handleLogOut`: A function that triggers the logout process when called.
 * - `handlePanel`: A function to toggle the visibility of the user panel.
 * - `isPending`: A boolean indicating if the logout operation is pending.
 * - `user`: The current authenticated user object.
 */

export const useUserActions = () => {
  const [showPanel, setShowPanel] = useState(false);
  const { user, setSession, setUser } = useAuth();
  const router = useRouter();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: mutate,
    onSuccess: async (data) => {
      if (!data.error) {
        setSession(null);
        setUser(null);
        await router.invalidate();
        navigate({
          to: "/",
        });
      }
    },
  });

  const handlePanel = () => {
    setShowPanel((prev) => !prev);
  };

  const handleLogOut = async () => {
    mutation.mutate();
  };

  return {
    showPanel,
    handleLogOut,
    handlePanel,
    isPending: mutation.isPending,
    user,
  };
};
