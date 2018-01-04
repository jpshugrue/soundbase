import React from 'react';
import { Link } from 'react-router-dom';

const ArtistShow = ({ bench, benchId, fetch }) => (
  <div className="artistShowPageContainer">
    <div className="artistCoverImageBox">
      //PUT ARTIST COVER IMAGE LINK HERE
    </div>
    <div className="showPageContentBox">
      <div className="albumListBox">
        //ALBUM LIST GOES HERE
      </div>
      <div className="artistShowBox">
        //ARTIST PROFILE GOES HERE
      </div>
    </div>
  </div>
);

export default ArtistShow;
