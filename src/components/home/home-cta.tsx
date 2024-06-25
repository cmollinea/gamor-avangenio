import { homeCta as content } from "../../content";

export const HomeCta = () => {
  return (
    <div className="doodle-div flex w-full flex-col space-y-8 px-10 pb-10 pt-40">
      <h1
        className="text-6xl font-medium leading-[4rem]"
        dangerouslySetInnerHTML={{ __html: content.heading }}
      />
      <p
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: content.text }}
      />
      <div className="flex items-center space-x-4 pr-20">
        <button className="rounded-full border border-gray-300/20 p-4 px-6 font-bold shadow-xl shadow-black/20 hover:bg-primary hover:text-primary-foreground">
          {content.buttonsLabels.primary}
        </button>
        <button className="font-bold hover:text-primary">
          {content.buttonsLabels.ghost}
        </button>
      </div>
    </div>
  );
};
