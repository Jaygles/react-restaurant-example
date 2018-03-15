import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>
        &copy;{' '}
        <a
          className="footer-link"
          href="http://www.thejaysully.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Jacob Sullivan
        </a>{' '}
        2018
      </p>
      <a href="https://www.github.com/Jaygles/" rel="noopener noreferrer" target="_blank">
        <img className="footer-logo" src="assets/img/github-icon.png" alt="github logo" />
      </a>
      <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
        <img className="footer-logo" src="assets/img/linkedin-icon.png" alt="linkedin logo" />
      </a>
    </footer>
  );
}

export default Footer;
