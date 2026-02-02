// App.jsx
// Single-page section switching (NO React Router)
// Navbar and Hero use onSectionChange("sectionName")
// Only one section renders at a time

import React, { useState } from "react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

const App = () => {
  const [currentSection, setCurrentSection] = useState("home"); // Default page

  // Controls which component is visible
  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Hero onSectionChange={setCurrentSection} />;

      case "about":
        return <About />;

      case "skills":
        return <Skills />;

      case "projects":
        return <Projects />;

      case "experience":
        return <Experience />;

      case "blog":
        return <Blog />;

      case "contact":
        return <Contact />;
        
      case "resume":
        return <Resume />;

      default:
        return <Hero onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      {/* Navbar ALWAYS visible */}
      <Navbar
        onSectionChange={setCurrentSection}
        currentSection={currentSection}
      />

      {/* Main content */}
      <main className="pt-20 md:pt-24 transition-all duration-500">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
