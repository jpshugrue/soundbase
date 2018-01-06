import React from 'react';
import {Link} from 'react-router-dom';

const ArtistShow = ({ artist, textStyle }) => (
  <div className="artistShowContainer">
    <div className="artistProfilePic">
      <img src={artist.profile_pic} className="profilePic"></img>
    </div>
    <div className="artistShowName" style={textStyle}>
      {artist.display_name}
    </div>
  </div>
);

export default ArtistShow;
