import React from 'react';
import HeaderNavContainer from './header_nav/header_nav_container';

const MainHeader = () => (
  <div className="mainHeaderBox">
    <div className="mainHeaderCenterBox">
      <div className="mainHeaderLeft">
        <img src={window.staticImages.headerLogoHome}></img>
        <span>This will be the search bar</span>
      </div>
      <div className="mainHeaderRight">
        <HeaderNavContainer />
      </div>
    </div>
  </div>
);

export default MainHeader;
