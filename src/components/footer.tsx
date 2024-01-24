import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
};

export default Footer;
