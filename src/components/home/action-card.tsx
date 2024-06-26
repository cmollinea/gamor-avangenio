import { Link } from "@tanstack/react-router";
import { actionCard as content } from "../../content/home-content";
import { useUsersContext } from "../../hooks/use-users-context";
import { Add, Done, Settings } from "../icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { HeroTabs } from "./hero-tabs";

export const ActionCard = () => {
  const { users, addUser } = useUsersContext();
  return (
    <div className="space-y-8 px-10 pb-10 pt-16 lg:order-2 xl:order-3">
      <div className="space-y-4">
        <h3 className="text-2xl">
          <span className="text-4xl text-foreground/50">01. </span>
          {content.firstStep.heading}
        </h3>
        <HeroTabs tabsContent={content.firstStep.tabs} />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl">
          <span className="text-4xl text-foreground/50">02. </span>
          {content.secondStep.heading}
        </h3>
        <Card className="bg-background">
          <CardHeader className="items-center justify-between border-b border-foreground/10 px-4">
            <CardTitle>{content.secondStep.cardTitle}</CardTitle>
            <span className="rounded-xl">
              <Settings />
            </span>
          </CardHeader>
          <CardContent className="space-y-2">
            {content.secondStep.users.map((user, index) => {
              const alreadyAdded = users.includes(user);
              return (
                <div key={user} className="flex justify-between">
                  <div className="flex w-full items-center space-x-2 py-2 font-bold">
                    <div className="flex h-6 w-6 place-content-center items-center rounded-full bg-button-primary/5 text-black dark:text-white">
                      {index + 1}
                    </div>
                    <span>{user}</span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex -space-x-4">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${user.split(" ")[0]}`}
                      />
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${user.split(" ")[0]}2`}
                      />
                    </div>
                    <button
                      disabled={alreadyAdded}
                      onClick={() => addUser(user)}
                      className="flex h-8 w-8 items-center justify-center rounded-xl bg-button-primary/5 text-black shadow-sm transition-transform ease-in-out active:scale-95 dark:text-white"
                      aria-label={`Add ${useUsersContext} to main panel`}
                      aria-disabled={alreadyAdded}
                    >
                      {alreadyAdded ? <Done /> : <Add />}
                    </button>
                  </div>
                </div>
              );
            })}
          </CardContent>
          <CardFooter className="relative z-10">
            <Link
              to={"/search"}
              className="rounded-xl bg-button-primary py-4 text-center text-xl font-bold text-button-primary-foreground"
            >
              {content.secondStep.buttonLabel}
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
