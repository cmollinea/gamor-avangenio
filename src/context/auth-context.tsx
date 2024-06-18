import { Session, User } from "@supabase/supabase-js";
import { useState } from "react";
import { AuthContext } from ".";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(session?.user ?? null);

  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     async (_event, session) => {
  //       setSession(session);
  //       setUser(session?.user ?? null);
  //     },
  //   );

  //   return () => {
  //     authListener?.subscription.unsubscribe();
  //   };
  // }, []);

  return (
    <AuthContext.Provider value={{ session, user, setUser, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};
