// src/components/Hero.jsx
import React from "react";
import heroImg from "../../assets/hero1.png";
export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12">
      {/* LEFT SIDE TEXT */}
      <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
        <p className="text-lg sm:text-xl md:text-2xl mb-2">
          Hi There!
          <span className="wave-emoji"> 👋</span>
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          I'M <span className="text-[var(--accent)]">Shyam Murodiya</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mt-4 sm:mt-6 font-medium tracking-wide text-[var(--muted)]">
          – Frontend Developer
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80">
          <img
            src={heroImg}
            alt="Hero Illustration"
            loading="eager"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
