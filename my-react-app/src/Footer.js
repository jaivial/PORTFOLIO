import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Jaime Villanueva Alcon</p>
        <p>Email: your.email@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div>
        <a href="link-to-instagram" target="_blank" rel="noopener noreferrer">
          <img src="path/to/instagram-logo.png" alt="Instagram" />
        </a>
        <a href="link-to-github" target="_blank" rel="noopener noreferrer">
          <img src="path/to/github-logo.png" alt="GitHub" />
        </a>
        <a href="link-to-whatsapp" target="_blank" rel="noopener noreferrer">
          <img src="path/to/whatsapp-logo.png" alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
