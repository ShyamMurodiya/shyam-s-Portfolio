// src/components/Socials.jsx
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Socials() {
  const socials = [
    { icon: FaGithub, link: "https://github.com/" },
    { icon: FaTwitter, link: "https://twitter.com/404UserNotFound" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/shyam-murodiya-376109293/" },
    { icon: FaInstagram, link: "https://www.instagram.com/shyam_murodiya/" },
  ];

  return (
    <section
      className="
        w-full flex flex-col items-center text-center
        px-4 py-16 sm:py-20
      "
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Find Me On
      </h2>

      <p className="text-sm sm:text-base text-[var(--muted)] mb-8">
        Feel free to <span className="text-[var(--accent)]">connect</span> with me
      </p>

      {/* Icons */}
      <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="
                w-10 h-10 sm:w-12 sm:h-12
                flex items-center justify-center
                rounded-full bg-[var(--card)]
                shadow-md 
                hover:scale-110 transition
              "
            >
              <Icon className="text-lg sm:text-xl text-[var(--text)]" />
            </a>
          );
        })}
      </div>
    </section>
  );
}