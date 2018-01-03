import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="greeting-login/signup">
    <Link to="/signup">sign up</Link>
    &nbsp;&nbsp;
    <Link to="/login">log in</Link>
  </nav>
);

const personalGreeting = (currentArtist, logout) => (
  <nav className="greeting-username/logout">
    <h2 className="greeting-username">Hi {currentArtist.username}</h2>
    <button className="greeting-logoutbutton" onClick={logout}>Log Out</button>
  </nav>
);

const Greeting = ({ currentArtist, logout }) => (
  currentArtist ? personalGreeting(currentArtist, logout) : sessionLinks()
);

export default Greeting;
