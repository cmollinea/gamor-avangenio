import { useRef } from "react";
import { useUsersContext } from "../../hooks/use-users-context";

export const RemoveUserBtn = ({ user }: { user: string }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const { removeUser } = useUsersContext();

  const coolFn = (user: string) => {
    removeUser(user);
  };

  return (
    <button
      ref={btnRef}
      id={user}
      onClick={() => coolFn(user)}
      className="cool-element h-16 w-16 rounded-xl bg-background/80 opacity-0 backdrop-blur-sm transition-all"
      aria-label={`Remove ${user}`}
    >
      {user[0].toUpperCase()}
    </button>
  );
};
