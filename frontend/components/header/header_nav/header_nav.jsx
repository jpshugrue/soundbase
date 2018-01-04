import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="sessionBox">
    <nav className="main-buttons">
      <Link to="/signup">sign up</Link>
      <Link to="/login">log in</Link>
    </nav>
  </div>
);

const toggleDropDown = () => {
  document.getElementById("header-dropdown").classList.toggle("show");
};

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

const headerDropDown = (currentArtist, logout) => (
  <div className="header-dropdown">
    <button onClick={toggleDropDown} className="dropbtn">
      <img src={window.staticImages.headerLogoHome} className="dropbtn"></img>
      <div className="artistName">
        {currentArtist.username}
      </div>
    </button>
    <div id="header-dropdown" className="dropdown-content">
      <Link to={`/artists/${currentArtist.id}/edit`}>edit profile</Link>
      <a onClick={logout}>log out</a>
    </div>
  </div>
);

const HeaderNav = ({ currentArtist, logout }) => (
  currentArtist ? headerDropDown(currentArtist, logout) : sessionLinks()
);

export default HeaderNav;
