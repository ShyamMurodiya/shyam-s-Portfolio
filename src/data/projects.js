// keep imports minimal and Vite-friendly
export const PROJECTS = [
  {
    title: "Quickmeds",
    description:
      " A QUCIKMED is a online pharmacy that deliver product to your doorstep ",
    image: new URL("../assets/quickmed.png", import.meta.url).href,
    github: "https://github.com/yourname/chatify",
    demo: "#",
  },
  {
    title: "Portfolio",
    description:
      "The portfolio is created usint React Js with a Vite and tailwind Css",
    image: new URL("../assets/portfolio.png", import.meta.url).href,
    github: "https://github.com/yourname/bits-of-code",
    demo: "#",
  },
  {
    title: "Editor.io",
    description:
      "Online Markdown + code editor with instant preview and local autosave. Supports custom HTML blocks and GFM.",
    image: new URL("../assets/project-editor.png", import.meta.url).href,
    github: "https://github.com/yourname/editor-io",
    demo: "#",
  },
  // add more items here
];