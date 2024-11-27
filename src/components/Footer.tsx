import React from 'react';

const Footer: React.FC = () => (
  <footer style={footerStyle}>
    <div style={containerStyle}>
      <p>&copy; {new Date().getFullYear()} Telegram Mini App. All Rights Reserved.</p>
      <ul style={linkListStyle}>
        <li style={linkStyle}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li style={linkStyle}>
          <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </li>
        <li style={linkStyle}>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
      </ul>
    </div>
  </footer>
);

const footerStyle: React.CSSProperties = {
  backgroundColor: '#282c34',
  color: '#ffffff',
  textAlign: 'center',
  padding: '10px 0',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const linkListStyle: React.CSSProperties = {
  listStyleType: 'none',
  display: 'flex',
  padding: 0,
  margin: '10px 0 0 0',
};

const linkStyle: React.CSSProperties = {
  margin: '0 10px',
  textDecoration: 'none',
  fontSize: '14px',
  color: '#61dafb',
};

export default Footer;
