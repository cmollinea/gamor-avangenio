import { useUsersContext } from "../../hooks/use-users-context";
import { RemoveUserBtn } from "./remove-user-btn";

export const UsersOnBoard = () => {
  const { users } = useUsersContext();

  return (
    <div className="absolute bottom-6 flex w-full place-content-center space-x-2">
      {users.map((user) => (
        <RemoveUserBtn key={user} user={user} />
      ))}
    </div>
  );
};
