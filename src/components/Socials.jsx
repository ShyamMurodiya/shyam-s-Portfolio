// src/components/Socials.jsx
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <section className="w-full flex flex-col items-center text-center py-24">
      
      <h2 className="text-3xl font-bold mb-2">Find Me On</h2>

      <p className="text-[var(--muted)] mb-10">
        Feel free to <span className="text-[var(--accent)]">connect</span> with me
      </p>

      {/* Icons */}
      <div className="flex gap-6">
        <a
          href="https://github.com/"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--card)] shadow-md hover:scale-110 transition"
        >
          <FaGithub className="text-xl text-[var(--text)]" />
        </a>

        <a
          href="#"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--card)] shadow-md hover:scale-110 transition"
        >
          <FaTwitter className="text-xl text-[var(--text)]" />
        </a>

        <a
          href="#"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--card)] shadow-md hover:scale-110 transition"
        >
          <FaLinkedin className="text-xl text-[var(--text)]" />
        </a>

        <a
          href="#"
          target="_blank"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--card)] shadow-md hover:scale-110 transition"
        >
          <FaInstagram className="text-xl text-[var(--text)]" />
        </a>
      </div>
    </section>
  );
}