import React from 'react';
import '../styles/styles.scss';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <img
        src="/src/assets/Logos/logo-kasa-white.png"
        className="footer-logo"
        alt="Kasa Logo"
      />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
