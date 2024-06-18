import { useCallback, useState } from "react";
import { UsersContext } from ".";

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<string[]>([] as string[]);

  const addUser = useCallback((user: string) => {
    setUsers((prev) => [...prev, user]);
  }, []);

  const removeUser = (user: string) => {
    const filteredUsers = users.filter((u) => u !== user);
    setUsers(filteredUsers);
  };

  return (
    <UsersContext.Provider value={{ users, removeUser, addUser }}>
      {children}
    </UsersContext.Provider>
  );
};
