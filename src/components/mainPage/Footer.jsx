// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.04)] py-6 bg-transparent text-[var(--text)]">
      <div
        className="
          max-w-6xl mx-auto px-6
          flex flex-col md:flex-row
          items-center justify-between
          gap-4 md:gap-0
          text-center md:text-left
        "
      >
        {/* Left */}
        <div className="text-sm">
          Designed & Developed by{" "}
          <span className="font-semibold text-[var(--muted)]">Shyam</span>
        </div>

        {/* Center */}
        <div className="text-xs opacity-80">
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--accent)] font-medium">Omega 🧸</span>
        </div>

        {/* Right — icons */}
        <div className="flex items-center justify-center gap-4">
          <FooterIcon href="https://github.com/" Icon={FaGithub} />
          <FooterIcon href="https://twitter.com/404UserNotFound" Icon={FaTwitter} />
          <FooterIcon href="https://www.linkedin.com/in/shyam-murodiya-376109293/" Icon={FaLinkedin} />
          <FooterIcon href="https://www.instagram.com/shyam_murodiya/" Icon={FaInstagram} />
        </div>
      </div>
    </footer>
  );
}

/* Reusable Icon Component */
function FooterIcon({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        p-2 rounded-full bg-[var(--card)]
        shadow-sm hover:opacity-80 
        transition
      "
    >
      <Icon className="text-[var(--text)] text-sm" />
    </a>
  );
}