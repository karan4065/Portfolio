import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaEnvelope, FaDribbble } from 'react-icons/fa6';
import '../connect.css';  

const Connect = () => {
  return (

    <div id='foot-connect'>
       <footer className="footer">
      <p className="footer-subtitle">
        A developer who enjoys building neat and useful websites.
Focused on clean code and smooth user experience.
Loves learning and improving every day.
Keeps things simple, creative, and functional.
      </p>

      <div className="footer-icons ">
        <div>
           <a href="https://github.com/karan4065" id='icon' target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/karan-jadhav-573968322/" id='icon' target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://twitter.com/karan_jadhav30" id='icon' target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon" />
        </a>
        </div>
         <div>
           <p className="footer-text">
        &copy; {new Date().getFullYear()} - All rights reserved by{" "}
        <span className="footer-author">Karan Jadhav</span>{" "}
        <span className="footer-heart">&hearts;</span>
      </p>
         </div>
      </div>


    </footer>
    </div>
  );
};

export default Connect;
