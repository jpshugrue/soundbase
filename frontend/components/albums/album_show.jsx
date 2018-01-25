import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentTime: 0, totalTime: 0};
    this.playpause = this.playpause.bind(this);
    this.updateElapsedTime = this.updateElapsedTime.bind(this);
    this.onAudioLoad = this.onAudioLoad.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.sliderMove = this.sliderMove.bind(this);
    this.editLink = this.editLink.bind(this);

    this.mainPlaySymbol = <i className="icon-play"></i>;
    this.smallPlaySymbol = [];
    this.currentSongIdx = 0;
    this.waitingForLoad = false;

    this.prevStyle = {color: "gray"};
    this.nextStyle = {};
  }

  componentDidMount() {
    this.props.fetchSongsByAlbum(this.props.albumId);
    this.player = document.getElementById('player');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.songs.length > 0) {
      this.player.pause();
      this.currentSongLoc = nextProps.songs[0].song_file;
      this.currentSongTitle = nextProps.songs[0].song_title;
    } else {
      this.currentSongLoc = undefined;
      this.currentSongTitle = undefined;
      this.player.src = undefined;
      this.player.load();
      this.setState({currentTime: 0});
      this.setState({totalTime: 0});
    }
    this.mainPlaySymbol = <i className="icon-play"></i>;
    this.smallPlaySymbol = [];
    this.currentSongIdx = 0;
    this.waitingForLoad = false;
  }

  handleCurrentSong(song, idx) {
    if (this.currentSongIdx === idx) {
      if (this.player.paused) {
        this.player.play();
        this.mainPlaySymbol = <i className="icon-pause"></i>;
        this.smallPlaySymbol[this.currentSongIdx] = <i className="icon-pause"></i>;
      } else {
        this.player.pause();
        this.mainPlaySymbol = <i className="icon-play"></i>;
        this.smallPlaySymbol[this.currentSongIdx] = <i className="icon-play"></i>;
      }
    } else {
      if (idx === 0) {
        this.prevStyle = {color: "gray"};
      } else if (idx === this.props.songs.length-1) {
        this.nextStyle = {color: "gray"};
      } else {
        this.prevStyle = {};
        this.nextStyle = {};
      }
      this.smallPlaySymbol[this.currentSongIdx] = <i className="icon-play"></i>;
      this.currentSongIdx = idx;
      this.smallPlaySymbol[this.currentSongIdx] = <i className="icon-pause"></i>;
      if (this.player.paused) {
        this.mainPlaySymbol = <i className="icon-pause"></i>;
      }
      this.currentSongLoc = song.song_file;
      this.currentSongTitle = song.song_title;
      this.player.src = this.currentSongLoc;
      this.player.load();
      this.waitingForLoad = true;
    }
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
    if (this.currentSongLoc) {
      if (this.player.paused) {
        this.player.play();
        this.mainPlaySymbol = <i className="icon-pause"></i>;
        this.smallPlaySymbol[this.currentSongIdx] = <i className="icon-pause"></i>;
      } else {
        this.player.pause();
        this.mainPlaySymbol = <i className="icon-play"></i>;
        this.smallPlaySymbol[this.currentSongIdx] = <i className="icon-play"></i>;
      }
    }
  }

  editLink() {
    if (this.props.loggedIn) {
      return <Link className="editLink" style={this.props.linkStyle} to={`${this.props.albumId}/edit`}>edit album</Link>;
    }
  }

  sliderMove() {
    this.player.currentTime = document.getElementById("sliderBar").value;
  }

  addToSymbolArray() {
    this.smallPlaySymbol.push(<i className="icon-play"></i>);
  }

  prevSong() {
    if (this.currentSongIdx > 0) {
      this.handleCurrentSong(this.props.songs[this.currentSongIdx-1], this.currentSongIdx-1);
    }
  }

  nextSong() {
    if (this.currentSongIdx < this.props.songs.length-1) {
      this.handleCurrentSong(this.props.songs[this.currentSongIdx+1], this.currentSongIdx+1);
    }
  }

  buildSongList() {
    return this.props.songs.map((song, idx) => (
      <li key={`${idx}`} className="songListItem">
        <div>
          {this.addToSymbolArray()}
          <button key="play" type="button" onClick={() => this.handleCurrentSong(song, idx)}>{this.smallPlaySymbol[idx]}</button>
          <span className="trackNumber" style={this.props.textStyle}>{song.track_number}.</span>
          <span className="trackName" onClick={() => this.handleCurrentSong(song, idx)} style={this.props.linkStyle}>{song.song_title}</span>
          <span className="trackLength" style={this.props.textStyle}>{this.formatTime(song.metadata)}</span>
        </div>
        <div className="downloadLink">
          <a href={song.song_file} style={this.props.linkStyle} download>download</a>
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div className="albumShowContainerBox">
        <div className="albumShowLeftSide">
          <div className="albumShowHeader">
            <h2 className="albumShowAlbumTitle" style={this.props.textStyle}> {this.props.album.album_title} </h2>
            <span style={this.props.textStyle}>by </span>
            <Link to={`/artists/${this.props.artist.id}`} style={this.props.linkStyle}>{this.props.artist.display_name}</Link> {this.editLink()}
          </div>
          <div className="albumShowMusicPlayer">
            <audio id="player" src={this.currentSongLoc} onTimeUpdate={this.updateElapsedTime} onLoadedData={this.onAudioLoad} onEnded={this.nextSong}></audio>
            <div className="musicPlayerLeftSide">
              <button id="playButton" onClick={this.playpause}>{this.mainPlaySymbol}</button>
            </div>
            <div className="musicPlayerRightSide">
              <div className="musicPlayerTopRow">
                <span className="musicPlayerSongTitle" style={this.props.textStyle}>{this.currentSongTitle}</span>
                <span className="musicPlayerTime" style={this.props.textStyle}>
                  {this.formatTime(this.state.currentTime)} / {this.formatTime(this.state.totalTime)}
                </span>
              </div>
              <div className="musicPlayerBottomRow">
                <div className="progressBar">
                  <div className="slider">
                    <input id="sliderBar" type="range" min="0" max={this.state.totalTime} value={this.state.currentTime} onInput={this.sliderMove} step="0.5"></input>
                  </div>
                </div>
                <i onClick={this.prevSong} style={this.prevStyle} className="icon-fast-backward"></i>
                <i onClick={this.nextSong} style={this.nextStyle} className="icon-fast-forward"></i>
              </div>
            </div>
          </div>
          <div className="albumShowSongList">
            <ul>
              { this.buildSongList() }
            </ul>
          </div>
          <div className="albumShowInfo">
            <span className="releaseSpan" style={this.props.textStyle}>released {this.props.album.release_date}</span>
            <br></br><br></br>
            <span style={this.props.textStyle} className="albumCredits">{this.props.album.album_credits}</span>
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
