// src/components/Header.jsx

import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center 
        px-6 py-4 
        bg-black/5 backdrop-blur-xl
        border-b border-white/2
      "
    >
      {/* LEFT: Logo */}
      <a
        href="/"
        className="font-bold text-[var(--accent)] no-underline text-2xl sm:text-3xl py-2"
      >
        Omega 🧸
      </a>

      {/* HAMBURGER (mobile) */}
      <button
        className="sm:hidden text-[var(--accent)] text-3xl focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? "✖" : "☰"}
      </button>

      {/* DESKTOP NAV */}
      <div className="hidden sm:flex items-center gap-12">
        <nav aria-label="primary" className="flex gap-10 text-[var(--accent)] font-bold">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/resume" label="Resume" />
          <NavItem to="/contact" label="Contact" />
        </nav>

        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-full left-0 w-full px-6 py-6 bg-black/80 backdrop-blur-xl border-t border-white/10 flex flex-col gap-6 sm:hidden z-50">
          <NavItem to="/" label="Home" onClick={() => setOpen(false)} />
          <NavItem to="/about" label="About" onClick={() => setOpen(false)} />
          <NavItem to="/projects" label="Projects" onClick={() => setOpen(false)} />
          <NavItem to="/resume" label="Resume" onClick={() => setOpen(false)} />
          <NavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />

          <div className="mt-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      )}
    </header>
  );
}

/* REUSABLE NAVLINK */
function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `relative no-underline text-lg
         after:content-[''] after:absolute after:left-0 after:bottom-0
         after:h-[2px] after:w-0 after:bg-[var(--accent)]
         after:transition-all after:duration-300 hover:after:w-full
         ${isActive ? "text-[var(--accent)]" : "text-[var(--accent)]/80"}`
      }
    >
      {label}
    </NavLink>
  );
}