import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentTime: 0, totalTime: 0};
    this.playpause = this.playpause.bind(this);
    this.updateElapsedTime = this.updateElapsedTime.bind(this);
    this.onAudioLoad = this.onAudioLoad.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongsByAlbum(this.props.albumId);
    this.player = document.getElementById('player');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.songs.length > 0) {
      this.currentSongLoc = nextProps.songs[0].song_file;
      this.currentSongTitle = nextProps.songs[0].song_title;
    }
  }

  setCurrentSong(song) {
    this.currentSongLoc = song.song_file;
    this.currentSongTitle = song.song_title;
    document.getElementById('player').src = this.currentSongLoc;
  }

  updateElapsedTime() {
    this.setState({currentTime: document.getElementById('player').currentTime});
  }

  onAudioLoad() {
    this.setState({currentTime: document.getElementById('player').currentTime});
    this.setState({totalTime: document.getElementById('player').duration});
  }

  playpause() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  renderSongs(songs) {
    return songs.map((song, idx) => {
      return <li key={`${idx}`} className="songListItem">
        <button onClick={this.setCurrentSong.bind(song)}>Play</button>
        {song.track_number}
        {song.song_title}
      </li>;
    });


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
      <div className="albumShowContainerBox">
        <div className="albumShowLeftSide">
          <div className="albumShowHeader">
            {this.props.album.album_title}
            by {this.props.artist.display_name}
          </div>
          <div className="albumShowMusicPlayer">
            <audio id="player" src={this.currentSongLoc} onTimeUpdate={this.updateElapsedTime} onLoadedData={this.onAudioLoad}></audio>
            <div className="musicPlayerLeftSide">
              <button onClick={this.playpause}>Play</button>
            </div>
            <div className="musicPlayerRightSide">
              <div className="musicPlayerTopRow">
                {this.currentSongTitle}
                <br></br>
                {this.state.currentTime}
                 /
                {this.state.totalTime}
              </div>
              <div className="musicPlayerBottomRow">
                <div className="progressBar">
                  <div className="slider">

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="albumShowSongList">
            <ul>
              {this.renderSongs(this.props.songs)}
            </ul>
          </div>
          <div className="albumShowInfo">
            <label>Release Date</label>
            {this.props.album.release_date}
            <label>Album Credits</label>
            {this.props.album.album_credits}
          </div>
        </div>
        <div className="albumShowRightSide">
          <div className="albumCover">
            <Link to={`/albums/${this.props.albumId}`}>
              <img src={this.props.album.album_cover} className="albumListCoverImage"></img>
            </Link>
          </div>
        </div>
      </div>

    );
  }
}

export default AlbumShow;
