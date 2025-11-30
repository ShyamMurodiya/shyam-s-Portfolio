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
    <div className="stars min-h-screen">
      <Header theme={theme} setTheme={setTheme} />

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>
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

          {/* RESUME (placeholder) */}
          <Route path="/resume" element={<ResumePage />} />

          {/* Contact (placeholder) */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}