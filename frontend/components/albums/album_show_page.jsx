import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import merge from 'lodash/merge';
import ArtistCover from '../artists/artist_cover';
import AlbumListContainer from './album_list_container';
import ArtistShow from '../artists/artist_show';
import AlbumShowContainer from './album_show_container';

class AlbumShowPage extends React.Component {

  constructor(props) {
    super(props);
    this.backgroundStyle = {};
    this.bodyStyle = {};
    this.textStyle = {};
    this.linkStyle = {};
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId).then((success) => {
      this.props.fetchArtist(success.album.artist_id);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.backgroundStyle = {backgroundColor: nextProps.artist.background_color};
      this.bodyStyle = {backgroundColor: nextProps.artist.body_color};
      this.textStyle = {color: nextProps.artist.text_color};
      this.linkStyle = {color: nextProps.artist.link_color};
    }
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  renderErrors() {
    return(
      <ul className="errorRender">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="albumShowPageContainer" style={this.backgroundStyle}>
        <div className="albumShowPageBodyBox" style={this.bodyStyle}>
          <div className="artistCoverImageBox">
            <ArtistCover artist={ this.props.artist } />
          </div>
          <div className="albumShowPageMainSection">
            <div className="albumShowContainer">
              <AlbumShowContainer album={ this.props.album } artist={ this.props.artist } albumId={ this.props.albumId } />
            </div>
            <div className="otherShowContainers">
              <div className="artistShowBox">
                <ArtistShow artist={ this.props.artist } textStyle={ this.textStyle } />
              </div>
              <label>discography</label>
              <div className="outerAlbumListBox">
                <AlbumListContainer artist={ this.props.artist } linkStyle={ this.linkStyle } limit={2}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
   }
}

// {this.renderErrors()}

export default AlbumShowPage;
