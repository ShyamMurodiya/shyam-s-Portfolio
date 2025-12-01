// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import useTheme from "./utils/useTheme";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"; // small About used on home
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage"; // full about page
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    /* root wrapper keeps relative positioning so the stars background can be absolute */
    <div className="relative min-h-screen">
      {/* Full-viewport stars background (absolute, behind content) */}
      <div className="stars absolute inset-0 -z-10" aria-hidden="true" />

      {/* Page content */}
      <Header theme={theme} setTheme={setTheme} />

      {/* Main: use a responsive container instead of inline style */}
     <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-28 pb-8">
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Socials />
              </>
            }
          />

          {/* ABOUT - full page */}
          <Route path="/about" element={<AboutPage />} />

          {/* PROJECTS */}
          <Route path="/projects" element={<ProjectsPage />} />

          {/* RESUME */}
          <Route path="/resume" element={<ResumePage />} />

          {/* CONTACT */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}