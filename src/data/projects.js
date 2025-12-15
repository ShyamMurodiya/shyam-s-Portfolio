// keep imports minimal and Vite-friendly
export const PROJECTS = [
  {
    title: "Quickmeds",
    description:
      " A QUCIKMED is a online pharmacy that deliver product to your doorstep ",
    image: new URL("../assets/quickmeds.png", import.meta.url).href,
    github: "https://github.com/TanmayWarthe/QuickMeds-An-Online-Pharamacy.git",
    demo: "https://quickmedsonlinepharmacy.onrender.com/",
  },
  {
    title: "Portfolio",
    description:
      "The portfolio is created usint React Js with a Vite and tailwind Css",
    image: new URL("../assets/portfolio.png", import.meta.url).href,
    github: "https://github.com/yourname/bits-of-code",
    demo: "https://shyam-s-portfolio-z6is.vercel.app/",
  },
  {
    title: "Cup Of Caffein",
    description:
     "A modern café website built with React. Features dynamic menu fetching from Google Sheets API, real-time search &  mobile-friendly user experience.",
    image: new URL("../assets/cop.png", import.meta.url).href,
    github: "https://github.com/yourname/editor-io",
    demo: "https://coc-ngp.vercel.app/",
  },
  // add more items here
];