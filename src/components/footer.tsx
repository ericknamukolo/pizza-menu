import React, { Fragment } from 'react';
import '../index.css';

const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        {new Date().toLocaleTimeString()}. We're currently open
      </footer>
      <button className='btn'>Order now</button>
    </Fragment>
  );
};

export default Footer;
