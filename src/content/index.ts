export const homeCta = {
  heading:
    "start <br/> <span class='primary-heading'>streaming</span> <br/> games <br/> differently",
  text: "gamor now has <span class='doodle-text'><b>stream party</b></span> platform",
  buttonsLabels: {
    primary: "Create account",
    ghost: "Sign In",
  },
};

export const mainBoard = {
  heading: "Fornite New Season",
  text: "Join Live Stream",
};

export const actionCard = {
  firstStep: {
    heading: "Choose Platform",
    tabs: [
      { label: "Party", emoji: "🎉" },
      { label: "Match", emoji: "🎮" },
      { label: "Stream", emoji: "📹" },
    ],
  },
  secondStep: {
    heading: "Searching Game",
    cardTitle: "COD Warzone",
    users: ["Dr Team", "Mia Plays", "Keoxer", "Nickmerc"],
    buttonLabel: "Search Now",
  },
} as const;

//todo new photos for racing, moba, mmorpg

export const categoriesContent = [
  { category: "Action", thumbnail: "/categories/action.jpeg" },
  { category: "Sports", thumbnail: "/categories/sports.jpeg" },
  { category: "MMORPG", thumbnail: "/categories/mmorpg.jpeg" },
  { category: "Racing", thumbnail: "/categories/racing.jpeg" },
  { category: "Moba", thumbnail: "/categories/moba.jpeg" },
  { category: "Strategy", thumbnail: "/categories/strategy.jpeg" },
  { category: "Shooter", thumbnail: "/categories/shooter.jpeg" },
  { category: "All", thumbnail: "/categories/all.jpeg" },
];
