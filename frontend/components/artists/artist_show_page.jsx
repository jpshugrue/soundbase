import React from 'react';
import { Link } from 'react-router-dom';
import ArtistCover from './artist_cover';
import AlbumListContainer from '../albums/album_list_container';
import ArtistShow from './artist_show';

class ArtistShowPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  render() {
    return (
      <div className="artistShowPageContainer">
        <div className="artistShowPageBodyBox">
          <div className="artistCoverImageBox">
            <ArtistCover artist={ this.props.artist } />
          </div>
          <div className="showPageContentBox">
            <div className="albumListBox">
              <AlbumListContainer artist={ this.props.artist } />
            </div>
            <div className="artistShowBox">
              <ArtistShow artist={ this.props.artist } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistShowPage;
