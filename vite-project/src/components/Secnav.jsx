import React, { useEffect, useState } from "react";
import "../secnav.css";

const Secnav = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <ul className="navbar-links">
        <li>
          <button
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => onNavigate(0)}
          >
            Hero
          </button>
        </li>
        <li>
          <button
            className={activeSection === "portfolio" ? "active" : ""}
            onClick={() => onNavigate(1.25)}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            className={activeSection === "certifications" ? "active" : ""}
            onClick={() => onNavigate(2.4)}
          >
            Certification
          </button>
        </li>
        <li>
          <button
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => onNavigate(4.07)}
          >
            Skills
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Secnav;
