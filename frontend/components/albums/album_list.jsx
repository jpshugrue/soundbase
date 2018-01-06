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
    if (this.props.limit) { albums.reverse(); }
    let endCount;
    endCount = this.props.limit ? this.props.limit : albums.length;
    return albums.slice(0,endCount).map((album, i) => {
      return <li key={`${i}`} className="albumListItem">
        <Link to={`/albums/${album.id}`} key="Link">
          <img src={album.album_cover} className="albumListCoverImage" key="Img"></img>
          <div className="albumListTitleText" style={this.props.linkStyle} key="div">{album.album_title}</div>
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
