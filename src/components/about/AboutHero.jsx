// src/components/about/AboutHero.jsx
import React from "react";

export default function AboutHero({ avatarSrc, name = "Shyam" }) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 max-w-5xl mx-auto mb-12 md:mb-20">
      {/* LEFT TEXT */}
      <div className="w-full md:w-2/3 text-base sm:text-lg leading-relaxed">
        <p className="mb-4">
          Hi everyone! I’m{" "}
          <span className="text-[var(--accent)] font-semibold">{name}</span> from Nagpur.
          I’m passionate about creating reliable, scalable, and clean UI experiences.
        </p>

        <p className="mb-4">Outside of coding, I enjoy:</p>

        <ul className="mb-4 list-disc list-inside space-y-2">
          <li>🎮 Playing Online Games</li>
          <li>📱 Eat,Scroll,Recharge,Repeat 😂 </li>
          <li>🎥 Capturing Moments</li>
          <li>🌍 Traveling & Exploring New Places</li>
        </ul>

        <p className="italic opacity-80 mt-2">“ Ctrl+C, Ctrl+V !”</p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <img
          src={avatarSrc}
          alt="avatar"
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover"
        />
      </div>
    </div>
  );
}