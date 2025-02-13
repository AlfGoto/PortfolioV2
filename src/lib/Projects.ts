const P = [
  {
    name: "Lowback",
    description: "",
    images: ["dotnet.png"],
    banner: "dotnet.png",
    url: null,
  },
  {
    name: "Sezame",
    description: "",
    images: ["logo.png", "marketplace.png"],
    banner: "logo",
    url: "https://joinsezame.com/",
  },
  {
    name: "Ce portfolio",
    description: "",
    images: [""],
    banner: null,
    url: null,
  },
  {
    name: "Démineur",
    description: "",
    images: ["minesweeper1.png", "minesweeper2.png", "minesweeper3.png"],
    banner: "minesweeper1.png",
    url: "https://minesweeper.fr/",
  },
  {
    name: "3Foto",
    description: "",
    images: ["home.png", "d.png", "empty home.png"],
    banner: "home.png",
    url: "https://3foto.vercel.app/",
  },
  {
    name: "Towalf",
    description: "",
    images: ["playing1.png", "playing2.png", "upgrade menu.png"],
    banner: "playing1.png",
    url: "https://towalf.netlify.app/",
  },
  {
    name: "La 3D",
    description: "",
    images: [
      "portfolio3D1.png",
      "portfolio3D2.png",
      "shipSeller1.png",
      "shipSeller2.png",
      "shipSeller3.png",
    ],
    banner: "portfolio3D2.png",
    url: null,
  },
  {
    name: "Cabinet de curiosité",
    description: "",
    images: [
      "FenetreS1.png",
      "FenetreS2.png",
      "FenetreS3.png",
      "paragraph1.png",
      "paragraph2.png",
      "paragraph3.png",
      "paragraph4.png",
      "pokemon1.png",
      "pokemon2.png",
      "pokemon3.png",
      "textMaker1.png",
      "textMaker2.png",
      "textMaker3.png",
    ],
    banner: "FenetreS1.png",
    url: null,
  },
];

export default P;
export type ProjectsType = typeof P;
export type Project = ProjectsType["0"];
