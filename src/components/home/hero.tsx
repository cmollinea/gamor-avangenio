import { heroContent } from "../../content";
import { useTheme } from "../../hooks/useTheme";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { HeroTabs } from "./hero-tabs";

export const Hero = () => {
  const date = new Date();
  const { theme } = useTheme();

  return (
    <section className="grid w-full overflow-hidden rounded-xl shadow-xl transition-colors ease-out max-lg:gap-20 max-lg:gap-y-10 lg:grid-cols-2 lg:bg-white xl:h-[45rem] xl:grid-cols-3 dark:bg-card-background">
      {/*First Card*/}

      <div className="flex w-full flex-col space-y-8 px-10 pb-10 pt-40">
        <h1
          className="text-6xl font-medium leading-[4rem]"
          dangerouslySetInnerHTML={{ __html: heroContent.firstcard.heading }}
        />
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: heroContent.firstcard.text }}
        />
        <div className="flex items-center space-x-4 pr-20">
          <button className="rounded-full border border-gray-300/20 p-4 px-6 font-bold shadow-xl shadow-black/20 hover:bg-primary hover:text-primary-foreground">
            {heroContent.firstcard.buttonsLabels.primary}
          </button>
          <button className="font-bold hover:text-primary">
            {heroContent.firstcard.buttonsLabels.ghost}
          </button>
        </div>
      </div>

      {/*Second Card*/}
      <div className="flex flex-col items-center bg-secondary pt-10 lg:order-3 lg:col-span-2 xl:col-span-1">
        <div className="space-y-2 text-center">
          <h3 className="font-bold">{heroContent.secondcard.heading}</h3>
          <p className="font-semibold text-black/50">
            {heroContent.secondcard.text}
          </p>
        </div>

        <div className="relative mt-12 flex space-x-2 rounded-full bg-white p-2 px-6 text-2xl font-bold text-secondary">
          <span>{date.getHours()}</span>
          <span>:</span>
          <span>{date.getMinutes()}</span>
          <span className="absolute -left-10 -top-6 h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm" />
        </div>

        <div
          className="relative h-full w-full bg-top bg-no-repeat max-xl:h-[500px]"
          style={{
            backgroundImage:
              theme === "dark" ? "url(/character.png)" : "url(/character2.png)",
          }}
        >
          {/* <img
            src={theme === "dark" ? "/character.png" : "/character2.png"}
            loading="lazy"
            decoding="async"
            className="h-fit max-xl:max-h-96"
          /> */}
          <div
            className={`absolute ${theme === "dark" ? "top-10" : "top-40"} left-10 rounded-xl bg-black/20 p-2 backdrop-blur-xl`}
          >
            <img
              src={theme === "dark" ? "/character3.png" : "/character5.png"}
              loading="lazy"
              decoding="async"
              className="h-16 w-16"
            />
          </div>
          <div
            className={`absolute right-10 ${theme === "dark" ? "top-40" : "top-10"} rounded-xl bg-black/20 p-2 backdrop-blur-xl`}
          >
            <img
              src={theme === "dark" ? "/character4.png" : "/character6.png"}
              loading="lazy"
              decoding="async"
              className="h-16 w-16"
            />
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="space-y-8 px-10 pb-10 pt-16 lg:order-2 xl:order-3">
        <div className="space-y-4">
          <h3 className="text-2xl">
            <span className="text-4xl text-foreground/50">01. </span>
            {heroContent.thirdCard.firstStep.heading}
          </h3>
          <HeroTabs tabsContent={heroContent.thirdCard.firstStep.tabs} />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl">
            <span className="text-4xl text-foreground/50">02. </span>
            {heroContent.thirdCard.secondStep.heading}
          </h3>
          <Card className="relative bg-background">
            <span className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-background to-background/5 backdrop-blur-[1px]" />
            <CardHeader className="justify-between border-b border-foreground/10 px-4">
              <CardTitle>
                {heroContent.thirdCard.secondStep.cardTitle}
              </CardTitle>
              <div className="h-10 w-10 rounded-xl bg-gray-500" />
            </CardHeader>
            <CardContent className="space-y-2">
              {heroContent.thirdCard.secondStep.users.map((user, index) => (
                <div key={user} className="flex justify-between">
                  <div className="flex w-full items-center space-x-2 py-2 font-bold">
                    <div className="flex h-6 w-6 place-content-center items-center rounded-full bg-gray-950">
                      {index + 1}
                    </div>
                    <span>{user}</span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex -space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100"></div>
                      <div className="h-10 w-10 rounded-full bg-gray-100"></div>
                    </div>
                    <button className="h-8 w-8 rounded-xl bg-gray-300 text-black">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="relative z-10">
              <button className="rounded-xl bg-button-primary py-4 text-xl text-button-primary-foreground">
                {heroContent.thirdCard.secondStep.buttonLabel}
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
