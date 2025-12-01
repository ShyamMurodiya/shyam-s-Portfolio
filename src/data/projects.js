// keep imports minimal and Vite-friendly
export const PROJECTS = [
  {
    title: "Chatify",
    description:
      "Personal chat room / workspace built with React, Firebase and Material-UI. Includes realtime messaging, image sharing and reactions.",
    image: new URL("../assets/project-chatify.png", import.meta.url).href,
    github: "https://github.com/yourname/chatify",
    demo: "#",
  },
  {
    title: "Bits-Of-Code",
    description:
      "Personal blog built with Next.js + Tailwind. Renders markdown posts, supports dark mode and easy publishing workflow.",
    image: new URL("../assets/project-blog.png", import.meta.url).href,
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