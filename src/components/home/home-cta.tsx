import { homeCta as content } from "../../content/home-content";

export const HomeCta = () => {
  return (
    <div className="doodle-div flex w-full flex-col space-y-8 px-10 pb-10 pt-40">
      <h1 className="text-6xl font-medium leading-[4rem]">
        start <br /> <span className="primary-heading">streaming</span> <br />
        games <br /> differently
      </h1>
      <p className="text-lg">
        gamor now has{" "}
        <span className="doodle-text">
          <b>stream party</b>
        </span>{" "}
        platform
      </p>
      <div className="flex items-center space-x-4 pr-20 max-[395px]:text-sm">
        <button className="rounded-full border border-gray-300/20 px-6 py-4 font-bold shadow-xl shadow-black/20 hover:bg-primary hover:text-primary-foreground max-[395px]:px-3">
          {content.buttonsLabels.primary}
        </button>
        <button className="font-bold hover:text-primary">
          {content.buttonsLabels.ghost}
        </button>
      </div>
    </div>
  );
};
