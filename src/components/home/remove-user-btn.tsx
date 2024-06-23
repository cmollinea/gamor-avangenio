import { memo, useRef } from "react";
import { useUsersContext } from "../../hooks/use-users-context";

const withRemoveUser = (Component: any) => {
  const MemoizedComponent = memo(Component);

  //@ts-expect-error Any prop
  return (props) => {
    const { removeUser } = useUsersContext();

    return (
      <MemoizedComponent {...props} removeUserWithoutReRenders={removeUser} />
    );
  };
};

export const RemoveUserBtn = withRemoveUser(
  ({ user, removeUserWithoutReRenders }) => {
    const btnRef = useRef<HTMLButtonElement>(null);

    const coolFn = (user: string) => {
      btnRef.current?.classList.remove("opacity-0");
      btnRef.current?.classList.add("bye-cool-element");
      setTimeout(() => {
        removeUserWithoutReRenders(user);
      }, 150);
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
  },
);
