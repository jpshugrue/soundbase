import React from 'react';
import { Link } from 'react-router-dom';
import ArtistCover from './artist_cover';
import AlbumListContainer from '../albums/album_list_container';
import ArtistShow from './artist_show';

class ArtistShowPage extends React.Component {

  constructor(props) {
    super(props);
    this.backgroundStyle = {};
    this.bodyStyle = {};
    this.textStyle = {};
    this.linkStyle = {};
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.backgroundStyle = {backgroundColor: nextProps.artist.background_color};
      this.bodyStyle = {backgroundColor: nextProps.artist.body_color};
      this.textStyle = {color: nextProps.artist.text_color};
      this.linkStyle = {color: nextProps.artist.link_color};
    }
  }

  render() {
    return (
      <div className="artistShowPageContainer" style={this.backgroundStyle}>
        <div className="artistShowPageBodyBox" style={this.bodyStyle}>
          <div className="artistCoverImageBox">
            <ArtistCover artist={ this.props.artist } />
          </div>
          <div className="showPageContentBox">
            <div className="albumListBox">
              <AlbumListContainer artist={ this.props.artist } linkStyle={ this.linkStyle } />
            </div>
            <div className="artistShowBox">
              <ArtistShow artist={ this.props.artist } textStyle={ this.textStyle } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistShowPage;
