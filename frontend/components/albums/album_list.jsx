import React from 'react';
import {Link} from 'react-router-dom';

class AlbumList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbums();
  }

  renderAlbums(albums) {
    return albums.map((album) => {
      return <li className="albumListItem">
        <Link to={`/albums/${album.id}`}>
          <img src={album.album_cover} className="albumListCoverImage"></img>
          <label className="albumListTitleText">{album.album_title}</label>
        </Link>
      </li>;
    });
  }

  render() {
    return (
      <div className="albumListContainer">
        <div className="albumListBox">
          <ul className="albumListUL">
            {this.renderAlbums(this.props.albums)}
          </ul>
        </div>
      </div>
    );
  }

}

export default AlbumList;
