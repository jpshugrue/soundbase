import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="sessionBox">
    <nav className="main-buttons">
      <div className="main-button-item"><Link to="/signup">sign up</Link></div>
      <div className="main-button-item"><Link to="/login">log in</Link></div>
    </nav>
  </div>
);

const toggleDropDown = () => {
  document.getElementById("header-dropdown").classList.toggle("show");
};

const headerDropDown = (currentArtist, logout) => (
  <div className="header-dropdown">
    <button onClick={toggleDropDown} className="dropbtn">
      <img src={currentArtist.profile_pic} className="artistPic"></img>
      <div className="artistName">
        {currentArtist.username}
        <img src={window.staticImages.dropdownCaret} className="dropDownCaret"></img>
      </div>

    </button>
    <div id="header-dropdown" className="dropdown-content">
      <div className="dropdown-item">
        <Link className="edit-profile-link" to={`/artists/${currentArtist.id}/edit`}>edit profile</Link>
      </div>
      <div className="dropdown-item" onClick={logout}>
        <a>log out</a>
      </div>
    </div>
  </div>
);

const HeaderNav = ({ currentArtist, logout }) => (
  currentArtist ? headerDropDown(currentArtist, logout) : sessionLinks()
);

export default HeaderNav;
