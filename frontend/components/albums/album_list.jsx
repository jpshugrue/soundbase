import React from 'react';
import {Link} from 'react-router-dom';

class AlbumList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
    if (this.props.includeArtistName) {
      this.props.fetchArtists();
    }
  }

  checkForArtistName(artistId) {
    if (this.props.includeArtistName && this.props.artists[artistId]) {
      return <div className="albumListArtistText" key="artistName">{this.props.artists[artistId].display_name}</div>;
    }
  }

  renderAlbums(albums) {
    if (this.props.limit) { albums.reverse(); }
    let endCount;
    endCount = this.props.limit ? this.props.limit : albums.length;
    return albums.slice(0,endCount).map((album, i) => {
      return <li key={`${i}`} className="albumListItem">
        <Link to={`/albums/${album.id}`} key="Link">
          <img src={album.album_cover} className="albumListCoverImage" key="Img"></img>
          <div className="albumListTitleText" style={this.props.linkStyle} key="div">{album.album_title}</div>
          {this.checkForArtistName(album.artist_id)}
        </Link>
      </li>;
    });
  }

  renderAddButton(loggedIn) {
    if (loggedIn) {
      return <li key="newAlbumLi" className="albumListItem">
        <Link to={`/artists/${this.props.artistId}/newAlbum`} key="Link" className="addNewAlbumButton">
          <div key="div" className="addNewAlbumText" style={this.props.linkStyle}> 
            Add A New Album
          </div>
        </Link>
      </li>;
    }
  }

  render() {
    return (
      <div className="albumListContainer">
        <div className="albumListBox">
          <ul className="albumListUL">
            {this.renderAlbums(this.props.albums)}
            {this.renderAddButton(this.props.loggedIn)}
          </ul>
        </div>
      </div>
    );
  }

}

export default AlbumList;
