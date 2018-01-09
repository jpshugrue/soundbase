import React from 'react';
import {Link} from 'react-router-dom';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.hasFetched = false;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.hasFetched) {
      this.props.fetchArtists();
      this.props.fetchAlbums();
      this.props.fetchSongs();
      this.hasFetched = true;
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
                <Link id={`${artist.display_name}`} to={`/artists/${artist.id}`}>{`Artist - ${artist.display_name}`}</Link>
              </li>
            ))}
            {this.props.albums.map((album, idx) => (
              <li style={{display: "none"}} key={`album-${idx}`} className="searchListItem">
                <Link id={`${album.album_title}`} to={`/albums/${album.id}`}>{`Album - ${album.album_title}`}</Link>
              </li>
            ))}
            {this.props.songs.map((song, idx) => (
              <li style={{display: "none"}} key={`song-${idx}`} className="searchListItem">
                <Link id={`${song.song_title}`} to={`/albums/${song.album_id}`}>{`Song - ${song.song_title}`}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

}

export default SearchBar;
