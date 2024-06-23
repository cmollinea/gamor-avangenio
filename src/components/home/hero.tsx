import { UsersProvider } from "../../context/user-context";
import { ActionCard } from "./action-card";
import { HomeCta } from "./home-cta";
import { MainBoard } from "./main-board";

export const Hero = () => {
  return (
    <section className="grid w-full overflow-hidden rounded-xl shadow-xl transition-colors ease-out max-lg:gap-20 max-lg:gap-y-10 lg:grid-cols-2 lg:bg-card-background xl:h-[45rem] xl:grid-cols-3 dark:bg-card-background">
      {/*First Card*/}
      <HomeCta />
      {/*Second Card*/}
      <UsersProvider>
        <MainBoard />
        {/* Third Card */}
        <ActionCard />
      </UsersProvider>
    </section>
  );
};
