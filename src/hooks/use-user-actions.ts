import { useMutation } from "@tanstack/react-query";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "../lib/utils";
import { useAuth } from "./use-auth-context";

const mutate = () => {
  return supabase.auth.signOut();
};

//!Bug first navigation into dashboard inmediately after log out perform a bug due to cache

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
          from: "/search",
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
