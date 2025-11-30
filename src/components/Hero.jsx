// src/components/Hero.jsx
import React from "react";
import heroImg from "../assets/hero.png"; // <-- main page image

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-between px-8 py-20">

      {/* LEFT SIDE TEXT */}
      <div className="max-w-xl">
        <p className="text-2xl mb-2">
          Hi There ! 
          <span className="wave-emoji">  👋</span>
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          I'M <span className="text-[var(--accent)]">Shyam Murodiya </span>
        </h1>

        <p className="text-2xl mt-6 font-medium tracking-wide text-[var(--muted)]">
          - Frontend Developer
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-[380px] h-[380px] flex items-center justify-center">
        <img
          src={heroImg}
          alt="Hero Illustration"
          className="w-full h-full object-contain"
        />
      </div>

    </section>
  );
}