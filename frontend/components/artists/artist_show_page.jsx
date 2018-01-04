import React from 'react';
import { Link } from 'react-router-dom';
import ArtistShowContainer from './artist_show_container';

const ArtistShowPage = ({ match }) => (
  <div className="artistShowPageContainer">
    <div className="artistShowPageBodyBox">
      <div className="artistCoverImageBox">
        //PUT ARTIST COVER IMAGE LINK HERE
      </div>
      <div className="showPageContentBox">
        <div className="albumListBox">
          //ALBUM LIST GOES HERE
        </div>
        <div className="artistShowBox">
          <ArtistShowContainer match={match}/>
        </div>
      </div>
    </div>
  </div>
);

export default ArtistShowPage;
