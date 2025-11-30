// src/components/Header.jsx

import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, setTheme }) {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-transparent">
      {/* LEFT: external logo (keeps anchor because it points off-site) */}
      <a
        href="/"
        className="font-bold text-[var(--accent)] no-underline text-3xl py-3"
      >
        Omega 🧸
      </a>

      {/* RIGHT: menu + theme toggle */}
      <div className="flex items-center gap-20">
        {/* MENU */}
        <nav
          aria-label="primary"
          className="flex gap-12 text-[var(--accent)] font-bold"
        >
          {/* use NavLink so we can style active link */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? "text-[var(--accent)]" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? "text-[var(--accent)]" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? "text-[var(--accent)]" : ""
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? "text-[var(--accent)]" : ""
              }`
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative no-underline after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full ${
                isActive ? "text-[var(--accent)]" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* THEME TOGGLE */}
        <div className="flex gap-2 items-center">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </header>
  );
}
