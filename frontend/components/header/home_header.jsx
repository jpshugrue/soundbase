import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SearchBarContainer from './search_bar_container';

const HomeHeader = () => (
  <div className="homeHeaderBox">
    <nav className="headerTopRow">
      <img src={window.staticImages.headerLogoHome}></img>
      <SearchBarContainer />
    </nav>
    <GreetingContainer />
  </div>
);

export default HomeHeader;
