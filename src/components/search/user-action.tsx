import { diceBearApiUrl } from "../../constants";
import { useUserActions } from "../../hooks/use-user-actions";

export const UserAction = () => {
  const { showPanel, handleLogOut, handlePanel, isPending, user } =
    useUserActions();

  return (
    <div className="relative place-self-end">
      <button
        onClick={handlePanel}
        className={`flex min-w-[150px] items-center rounded-xl bg-background p-2 transition-all ease-in-out hover:bg-background/50 active:scale-95 ${showPanel ? "shadow-inner shadow-foreground/20" : ""}`}
      >
        <img
          className="h-10 w-10 rounded-full"
          src={`${diceBearApiUrl}`}
          alt={`avatar`}
        />
        <p className="text-xs">{user?.email}</p>
      </button>
      {showPanel && (
        <div className="cool-element absolute z-10 h-fit w-full rounded-xl bg-background p-4 opacity-0 max-md:-bottom-20 md:-top-20">
          <button
            onClick={handleLogOut}
            className="w-full rounded-xl bg-red-500 p-2 text-gray-50"
          >
            {isPending ? "Loggin out" : "Log Out"}
          </button>
        </div>
      )}
    </div>
  );
};
