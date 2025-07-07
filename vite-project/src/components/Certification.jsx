import React from "react";
import "../Certifications.css";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Accenture - Forage",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1JirJxraujna-5UO-AjEYzfdTkOaICYwH/view?usp=drive_link",
    achievements: [
      "Completed a virtual simulation focused on real-world business data analysis.",
      "Worked on transformation and visual insights for stakeholders.",
    ],
    tags: ["Data Analysis", "Excel", "Visualization"],
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "AICTE Internshala",
    date: "Mar 2025",
    link: "https://drive.google.com/file/d/1CpRdhkfE_jt-tRIb-3IerITEoL73LEUw/view?usp=drive_link",
    achievements: [
      "Built Android apps using Java and Android Studio.",
      "Worked on UI layouts and event handling for mobile applications.",
    ],
    tags: ["Android", "Java", "UI/UX"],
  },
  {
    title: "Programming, Data Structures And Algorithms Using Python",
    issuer: "NPTEL - IIT Madras",
    date: "Mar 2025",
    link: "https://drive.google.com/file/d/10LgKM68WO-5_MWkzEB62oXqapmwgC-ve/view?usp=drive_link",
    achievements: [
      "Mastered algorithm design techniques including recursion, sorting, and hashing.",
      "Scored 92% with Elite+Silver certificate.",
    ],
    tags: ["Python", "DSA", "NPTEL"],
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL - IIT Madras",
    date: "Mar 2025",
    link: "https://drive.google.com/file/d/179HnxKBBk42tKzOqtczXiMbEiSz61lhi/view?usp=drive_link",
    achievements: [
      "Learned core data science libraries: NumPy, Pandas, and Matplotlib.",
      
      "Developed mini-projects for data analysis and reporting.",
    ],
    tags: ["Python", "Pandas", "Data Science"],
  },
];

const Certification = () => {
  return (
     <div id="certificates">
      <section className="certification-section">
      <h2 className="section-title head">Certifications</h2>
      <div className="certi-content">
         <div className="certification-timeline">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <div className="card-header">
              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
              <div className="cert-date">
                <FaCalendarAlt className="calendar-icon" />
                <span>{cert.date}</span>
              </div>
            </div>
            <p className="cert-desc">
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                View Certificate <FaExternalLinkAlt className="external-icon" />
              </a>
            </p>
            <ul className="cert-achievements">
              {cert.achievements.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="cert-tags">
              {cert.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
     </div>
  );
};

export default Certification;
