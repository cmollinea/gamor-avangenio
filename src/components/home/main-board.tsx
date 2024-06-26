import { mainBoard as content } from "../../content/home-content";
import { useThemeContext } from "../../hooks/use-theme-context";
import { User } from "../icons";
import { UsersOnBoard } from "./users-on-board";

const date = new Date();

export const MainBoard = () => {
  const { theme } = useThemeContext();

  return (
    <div className="relative flex flex-col items-center bg-secondary pt-10 lg:order-3 lg:col-span-2 xl:col-span-1">
      <div className="space-y-2 text-center">
        <h3 className="font-bold text-white">{content.heading}</h3>
        <p className="font-semibold text-black/50">{content.text}</p>
      </div>

      <div className="relative mt-12 flex space-x-2 rounded-full bg-white p-2 px-6 text-2xl font-bold text-secondary">
        <span>{date.getHours()}</span>
        <span>:</span>
        <span>{date.getMinutes()}</span>
        <span className="absolute -left-10 -top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
          <User />
        </span>
      </div>

      {/* Floating Images */}
      <div
        className="relative h-full w-full bg-top bg-no-repeat max-xl:h-[500px]"
        style={{
          backgroundImage:
            theme === "dark" ? "url(/character.png)" : "url(/character2.png)",
        }}
      >
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

      {/* Users */}
      <UsersOnBoard />
    </div>
  );
};
