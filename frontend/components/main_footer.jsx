import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="mainFooterContainer">
    <div className="mainFooterBody">
      <Link to="/"><img src={window.staticImages.footerLogo}></img></Link>
      <nav className="footerNav">
        <a href="https://github.com/jpshugrue">github</a>
        <a href="https://www.linkedin.com/in/jeremiahshugrue/">linkedIn</a>
        <a href="http://jpshugrue.com/">portfolio</a>
      </nav>
    </div>
  </div>
);

export default Footer;
