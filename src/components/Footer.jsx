// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.04)] bg-transparent text-[var(--text)] py-6">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        {/* Left */}
        <div className="text-s">
          Designed and Developed by <span className="font-semibold text-[var(--muted)] ">Shyam</span>
        </div>

        {/* Center */}
        <div className="text-xs">
          Copyright © {new Date().getFullYear()} <span className="text-[var(--accent)]">omega 🧸</span>
        </div>

        {/* Right — small icons */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--card)] shadow-sm">
            <FaGithub className="text-sm text-[var(--text)]" />
          </a>

          <a href="#" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--card)] shadow-sm">
            <FaTwitter className="text-sm text-[var(--text)]" />
          </a>

          <a href="#" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--card)] shadow-sm">
            <FaLinkedin className="text-sm text-[var(--text)]" />
          </a>

          <a href="#" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--card)] shadow-sm">
            <FaInstagram className="text-sm text-[var(--text)]" />
          </a>
        </div>
      </div>
    </footer>
  );
}