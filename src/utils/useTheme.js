// src/utils/useTheme.js
import { useEffect, useState } from "react";
const THEME_KEY = "site-theme";

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved) return saved;
    } catch {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.setAttribute("data-theme", "dark");
    else html.removeAttribute("data-theme");
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }, [theme]);

  return [theme, setTheme];
}