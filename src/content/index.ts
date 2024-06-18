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

export const categoriesContent = [
  { category: "Action", thumbnail: "/categories/action.jpeg" },
  { category: "Sports", thumbnail: "/categories/sports.jpeg" },
  { category: "Adventure", thumbnail: "/categories/adventure.jpg" },
  { category: "Arcade", thumbnail: "/categories/arcade.jpeg" },
  { category: "Fantasy", thumbnail: "/categories/fantasy.jpeg" },
  { category: "Strategy", thumbnail: "/categories/strategy.jpeg" },
  { category: "Shooter", thumbnail: "/categories/shooter.jpeg" },
  { category: "All", thumbnail: "/categories/all.jpeg" },
];
