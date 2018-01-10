import React from 'react';
import AlbumListContainer from '../albums/album_list_container';
import ArtistListContainer from '../artists/artist_list_container';

const HomePage = (state) => (
  <div className="homePageContainer">
    <div className="homePageBodyBox">
      <div className="homePageArtistListHeader">
        NEW AND NOTABLE ARTISTS
      </div>
      <div className="homePageArtistListBox">
        <ArtistListContainer limit={4}/>
      </div>
      <div className="homePageAlbumListHeader">
        DISCOVER - LATEST ALBUMS
      </div>
      <div className="homePageAlbumListBox">
        <AlbumListContainer limit={8} includeArtistName={true}/>
      </div>
    </div>
  </div>
);

export default HomePage;
