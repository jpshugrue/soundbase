import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="greetingBox">
    <div className="greetingBoilerplate">Discover amazing new music and directly support the artists who make it.</div>
    <nav className="greeting-buttons">
      <Link to="/signup">sign up</Link>
      <Link to="/login">log in</Link>
    </nav>
  </div>
);

const personalGreeting = (currentArtist, logout) => (
  <nav className="greeting-usernamelogout">
    <div className="greeting-username">Hi {currentArtist.username}</div>
    <a className="greeting-logoutbutton" onClick={logout}>log out</a>
  </nav>
);

const Greeting = ({ currentArtist, logout }) => (
  currentArtist ? personalGreeting(currentArtist, logout) : sessionLinks()
);

export default Greeting;
