import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentTime: 0, totalTime: 0};
    this.playpause = this.playpause.bind(this);
    this.updateElapsedTime = this.updateElapsedTime.bind(this);
    this.onAudioLoad = this.onAudioLoad.bind(this);
    this.waitingForLoad = false;
    this.sliderMove = this.sliderMove.bind(this);
    this.editLink = this.editLink.bind(this);
    this.mainPlaySymbol = <i className="icon-play"></i>;
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

  handleCurrentSong(song) {
    this.currentSongLoc = song.song_file;
    this.currentSongTitle = song.song_title;
    this.player.src = this.currentSongLoc;
    this.player.load();
    this.waitingForLoad = true;
  }

  updateElapsedTime() {
    this.setState({currentTime: document.getElementById('player').currentTime});
  }

  onAudioLoad() {
    this.setState({currentTime: document.getElementById('player').currentTime});
    this.setState({totalTime: document.getElementById('player').duration});
    if (this.waitingForLoad) {
      this.waitingForLoad = false;
      this.player.play();
    }
  }

  formatTime(timeInSecs) {
    let mins;
    if ((Math.floor(timeInSecs / 60)) < 10) {
      mins = "0"+String(Math.floor(timeInSecs / 60));
    } else {
      mins = String(Math.floor(timeInSecs / 60));
    }
    let secs;
    if ((timeInSecs % 60) < 10) {
      secs = "0"+String(Math.floor(timeInSecs % 60));
    } else {
      secs = String(Math.floor(timeInSecs % 60));
    }
    return `${mins}:${secs}`;
  }

  playpause() {
    if (this.player.paused) {
      this.player.play();
      this.mainPlaySymbol = <i className="icon-pause"></i>;
      // document.getElementById("playButton").style.fontSize = "20px";
    } else {
      this.player.pause();
      this.mainPlaySymbol = <i className="icon-play"></i>;
    }
  }

  editLink() {
    if (this.props.loggedIn) {
      return <Link className="editLink" to={`${this.props.albumId}/edit`}>edit album</Link>;
    }
  }

  sliderMove() {
    this.player.currentTime = document.getElementById("sliderBar").value;
  }

  render() {
    return (
      <div className="albumShowContainerBox">
        <div className="albumShowLeftSide">
          <div className="albumShowHeader">
            <h2 className="albumShowAlbumTitle"> {this.props.album.album_title} </h2>
            <span>by </span>
            <Link to={`/artists/${this.props.artist.id}`}>{this.props.artist.display_name}</Link> {this.editLink()}
          </div>
          <div className="albumShowMusicPlayer">
            <audio id="player" src={this.currentSongLoc} onTimeUpdate={this.updateElapsedTime} onLoadedData={this.onAudioLoad}></audio>
            <div className="musicPlayerLeftSide">
              <button id="playButton" onClick={this.playpause}>{this.mainPlaySymbol}</button>
            </div>
            <div className="musicPlayerRightSide">
              <div className="musicPlayerTopRow">
                <span className="musicPlayerSongTitle">{this.currentSongTitle}</span>
                <span className="musicPlayerTime">
                  {this.formatTime(this.state.currentTime)} / {this.formatTime(this.state.totalTime)}
                </span>
              </div>
              <div className="musicPlayerBottomRow">
                <div className="progressBar">
                  <div className="slider">
                    <input id="sliderBar" type="range" min="0" max={this.state.totalTime} value={this.state.currentTime} onInput={this.sliderMove} step="0.5"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="albumShowSongList">
            <ul>
              {this.props.songs.map((song, idx) => (
                <li key={`${idx}`} className="songListItem">
                  <div>
                    <button key="play" type="button" onClick={() => this.handleCurrentSong(song)}></button>
                    <span className="trackNumber">{song.track_number}.</span>
                    <span className="trackName">{song.song_title}</span>
                  </div>
                  <div className="downloadLink">
                    <a href={song.song_file} download>download</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="albumShowInfo">
            <span className="releaseSpan">released {this.props.album.release_date}</span>
            <br></br><br></br>
            <span>{this.props.album.album_credits}</span>
          </div>
        </div>
        <div className="albumShowRightSide">
          <div className="albumCover">
            <Link to={`/albums/${this.props.albumId}`}>
              <img src={this.props.album.album_cover}></img>
            </Link>
          </div>
        </div>
      </div>

    );
  }
}

export default AlbumShow;
