import React from 'react';
import '../Portfolio.css';
import image from '../images/image.png';
import student from '../images/student.png';
import tictac from '../images/tictac.png';

const Portfolio = () => {
  return (
    <div id='portfolio'>
      <section className="portfolio-section">
        <h2 className="portfolio-title">Portfolio</h2>

        <div className='portfolio-container'>

          {/* Project 1: Online Bookstore */}
          <div className="portfolio-project ">
            <div className="project-left">
              <div className="image-hover-container">
                <img
                  src={image}
                  alt="Online Bookstore System"
                  className="project-image hover-scale"
                />
                <div className="custom-overlay-icons">
                  <a
                    href="https://github.com/karan4065/MainBook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-circle"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://book-store-final.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-circle"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-right">
              <h3 className="project-title pink slide-in-left">Online Bookstore System</h3>
              <p className="project-description">
                A full-featured online bookstore that allows users to browse, search, and purchase books with real-time cart
                updates. It includes user authentication, order history, and a responsive UI with a theme toggle feature.
              </p>
              <div className="tech-stack">
                <span>React.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* Project 2: Student Management Portal */}
          <div className="portfolio-project reverse fade-in">
            <div className="project-left">
              <h3 className="project-title pink slide-in-right">Student Management Portal</h3>
              <p className="project-description">
                A secure Student portal to manage students with full CRUD functionality and role-based access control. Features
                include JWT authentication, Login, Signup, and a clean dashboard with Details logs.
              </p>
              <div className="tech-stack">
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="project-right">
              <div className="image-hover-container">
                <img
                  src={student}
                  alt="Student Management Portal"
                  className="project-image hover-scale"
                />
                <div className="custom-overlay-icons">
                  <a
                    href="https://github.com/yourusername/student-portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-circle"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://studentportal.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-circle"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Tic Tac Toe Game */}
          <div className="portfolio-project fade-in">
            <div className="project-left">
              <div className="image-hover-container">
                <img
                  src={tictac}
                  alt="Tic Tac Toe Game"
                  className="project-image hover-scale"
                />
                <div className="custom-overlay-icons">
                  <a
                    href="https://github.com/yourusername/tic-tac-toe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-circle"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://tictactoe.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-circle"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-right">
              <h3 className="project-title pink slide-in-left">Tic Tac Toe Game</h3>
              <p className="project-description">
                A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. The game features a 3x3 grid,
                turn-based player logic, win/draw detection, and a restart button. It provides a fun way to play against a friend
                on the same device.
              </p>
              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Portfolio;
