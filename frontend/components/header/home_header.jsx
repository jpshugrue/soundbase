import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const HomeHeader = () => (
  <div className="homeHeaderBox">
    <nav className="headerTopRow">
      <span>(logo) soundbase</span>
      <span>This will be the search bar</span>
    </nav>
    <GreetingContainer />
  </div>
);

export default HomeHeader;
