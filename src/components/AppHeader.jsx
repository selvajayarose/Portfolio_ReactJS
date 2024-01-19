import React, { useState } from "react";

import Logo from "../assets/logo.svg";

const AppHeader = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleOptions = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <React.Fragment>
      <div
        className={`floating-button-container ${isExpanded ? "expanded" : ""}`}
        onClick={() => toggleOptions()}
      >
        <button className="floating-button">+</button>
        <div className="options">
          <div className="option">Option 1</div>
          <div className="option">Option 2</div>
          {/* Add more options as needed */}
        </div>
      </div>
      <nav className="app-header flex justify-between px-12 py-6 bg-sky-500/[.05] w-full">
        <img src={Logo} alt="logo" />

        <div className="flex gap-6">
          <button className="text-primary" onClick={() => handleScrollToTop()}>
            Home
          </button>
          <button
            className="text-primary"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default AppHeader;

// <div id="section1">Content of Section 1</div>
// <div id="section2">Content of Section 2</div>
