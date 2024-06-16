import { useCallback, useState } from "react";

type Tabs = "Party" | "Match" | "Stream";

type Props = {
  tabsContent: readonly { label: Tabs; emoji: string }[];
};

export const HeroTabs = ({ tabsContent }: Props) => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("Party");

  const handleSelect = useCallback((tab: Tabs) => {
    setSelectedTab(tab);
  }, []);

  return (
    <div className="flex space-x-4 rounded-full bg-background p-2">
      {tabsContent.map((tab) => (
        <button
          key={tab.emoji}
          className={`${selectedTab === tab.label && "bg-gray-950/10 dark:bg-gray-300/10"} w-full rounded-full py-2 font-semibold transition-colors ease-in-out`}
          onClick={() => handleSelect(tab.label)}
        >
          {selectedTab === tab.label && tab.emoji} {tab.label}
        </button>
      ))}
    </div>
  );
};
