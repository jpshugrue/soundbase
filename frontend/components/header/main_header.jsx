import React from 'react';
import HeaderNavContainer from './header_nav/header_nav_container';
import { Link } from 'react-router-dom';

const MainHeader = () => (
  <div className="mainHeaderBox">
    <div className="mainHeaderCenterBox">
      <div className="mainHeaderLeft">
        <Link to="/"><img src={window.staticImages.headerLogoHome}></img></Link>
        <span>This will be the search bar</span>
      </div>
      <div className="mainHeaderRight">
        <HeaderNavContainer />
      </div>
    </div>
  </div>
);

export default MainHeader;
