import React from 'react';
import {Link} from 'react-router-dom';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.hasFetched = false;
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getAlbumCover = this.getAlbumCover.bind(this);
  }

  handleClick() {
    if (!this.hasFetched) {
      this.props.fetchArtists();
      this.props.fetchAlbums();
      this.props.fetchSongs();
      this.hasFetched = true;
    }
  }

  componentDidMount() {
    this.checkListHeight();
  }

  checkListHeight() {
    let list = document.getElementById('searchList');
    let listItems = document.getElementById("searchList").getElementsByTagName('li');
    let allHidden = true;
    for (const listItem of listItems) {
      if (listItem.style.display !== "none") {
        allHidden = false;
      }
    }
    if (allHidden) {
      list.style.display = "none";
    } else {
      list.style.display = "";
    }
  }

  handleInput() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let listItems = document.getElementById("searchList").getElementsByTagName('li');
    let aTag;
    for (const listItem of listItems) {
      aTag = listItem.getElementsByTagName("a")[0];
      if (input !== "" && aTag.id.toLowerCase().indexOf(input) > -1) {
        listItem.style.display = "";
      } else {
        listItem.style.display = "none";
      }
    }
    this.checkListHeight();
  }

  getAlbumCover(albumId) {
    const album = this.props.albums.find((album) => {
      return album.id === albumId;
    });
    if (album) {
      return album.album_cover;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="searchBarContainer">
        <div className="searchBarBox">
          <img className="searchIcon" src={window.staticImages.searchIcon}></img>
          <input id="searchBar" type="text" onClick={this.handleClick} onChange={this.handleInput}
            placeholder="Search for artist, track or album"></input>
          <ul id="searchList" className="searchResultList">
            {this.props.artists.map((artist, idx) => (
              <li style={{display: "none"}} key={`artist-${idx}`} className="searchListItem">
                <Link id={`${artist.display_name}`} to={`/artists/${artist.id}`}>
                  <img src={`${artist.profile_pic}`}></img>
                  <div className="searchResultText">
                    <div className="boldSearchHeader">{`${artist.display_name}`}</div>
                    <div>Artist</div>
                  </div>
                </Link>
              </li>
            ))}
            {this.props.albums.map((album, idx) => (
              <li style={{display: "none"}} key={`album-${idx}`} className="searchListItem">
                <Link id={`${album.album_title}`} to={`/albums/${album.id}`}>
                  <img src={`${album.album_cover}`}></img>
                  <div className="searchResultText">
                    <div className="boldSearchHeader">{`${album.album_title}`}</div>
                    <div>Album</div>
                  </div>
                </Link>
              </li>
            ))}
            {this.props.songs.map((song, idx) => (
              <li style={{display: "none"}} key={`song-${idx}`} className="searchListItem">
                <Link id={`${song.song_title}`} to={`/albums/${song.album_id}`}>
                  <img src={`${this.getAlbumCover(song.album_id)}`}></img>
                  <div className="searchResultText">
                    <div className="boldSearchHeader">{`${song.song_title}`}</div>
                    <div>Track</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

}

export default SearchBar;
