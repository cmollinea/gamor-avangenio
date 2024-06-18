import { createFileRoute, redirect } from "@tanstack/react-router";
import { supabase } from "../lib/utils";

export const Route = createFileRoute("/search")({
  loader: async ({ context }) => {
    if (!context.authContext?.session) {
      const setSession = context.authContext?.setSession;
      const setUser = context.authContext?.setUser;
      if (setSession && setUser) {
        const { data } = await supabase.auth.getSession();
        if (!data.session) {
          throw redirect({
            to: "/",
          });
        }
        setSession(data.session);
        setUser(data.session?.user ?? null);
      }
    }
  },
});
