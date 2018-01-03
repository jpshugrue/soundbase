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
  <nav className="greeting-username/logout">
    <h2 className="greeting-username">Hi {currentArtist.username}</h2>
    <button className="greeting-logoutbutton" onClick={logout}>Log Out</button>
  </nav>
);

const Greeting = ({ currentArtist, logout }) => (
  currentArtist ? personalGreeting(currentArtist, logout) : sessionLinks()
);

export default Greeting;
