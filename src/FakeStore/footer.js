// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()}  MYSTORE. All rights reserved.</p>
      <div style={styles.links}>
        <a href="/about" style={styles.link}>About</a>
        <a href="/contact" style={styles.link}>Contact</a>
        <a href="/privacy" style={styles.link}>Privacy Policy</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  text: {
    margin: '0',
  },
  links: {
    marginTop: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
  },
};

export default Footer;
