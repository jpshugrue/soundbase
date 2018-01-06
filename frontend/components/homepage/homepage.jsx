import React from 'react';
import AlbumListContainer from '../albums/album_list_container';
// import ArtistListContainer from '../artists/artist_list_container';

const HomePage = (state) => (
  <div className="homePageContainer">
    <div className="homePageBodyBox">
      <div className="homePageArtistListHeader">
        New and Notable Artists
      </div>
      <div className="homePageArtistListBox">

      </div>
      <div className="homePageAlbumListHeader">
        Discover - Latest Albums
      </div>
      <div className="homePageAlbumListBox">
        <AlbumListContainer limit={8}/>
      </div>
    </div>
  </div>
);

export default HomePage;
