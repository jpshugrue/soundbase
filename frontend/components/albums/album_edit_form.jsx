import React from 'react';
import {Link} from 'react-router-dom';
import merge from 'lodash/merge';

class AlbumEditForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { album: this.props.album, songs: this.props.songs } ;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.albumFormData = new FormData();
    this.handleAddSong = this.handleAddSong.bind(this);
    this.handleRemoveSong = this.handleRemoveSong.bind(this);
  }

  handleSubmit(e) {
    let songFormData;
    e.preventDefault();
    this.props.updateAlbum({formData: this.albumFormData, albumId: this.props.albumId});
    for (const idx in this.state.songs) {
      if (idx < this.props.songs.length && this.state.songs[idx] === undefined) {
        this.props.deleteSong(this.props.songs[idx].song_Id);
      } else {
        songFormData = new FormData();
        songFormData.set(`song[song_title]`, this.state.songs[idx].song_title);
        songFormData.set(`song[track_number]`, this.state.songs[idx].track_number);
        songFormData.set(`song[song_file]`, this.state.songs[idx].song_file);
        songFormData.set(`song[artist_id]`, this.props.album.artist_id);
        songFormData.set(`song[album_id]`, this.props.albumId);
        if (idx >= this.props.songs.length) {
          this.props.createSong(songFormData);
        } else {
          this.props.updateSong(songFormData);
        }
      }
    }
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId);
    this.props.fetchSongs();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({album: nextProps.album, songs: nextProps.songs});
    this.albumFormData.set(`album[album_title]`, nextProps.album.album_title);
    debugger
  }

  updateAlbum(field) {
    return event => {
      this.setState({["album"]: {[field]: event.currentTarget.value}});
      this.albumFormData.set(`album[${field}]`, event.target.value);
    };
  }

  fileUpload({file, type}) {
    this.albumFormData.set(`album[${type}]`, file);
  }

  handleAddSong() {
    this.setState({
     songs: this.state.songs.concat([{ song_title: "", track_number: "", song_file: undefined}])
    });
  }

  songUpload({file, idx}) {
    this.setState({
      songs: this.state.songs.map((song, songIdx) => {
        if (songIdx !== idx) return song;
        return merge({}, song, {["song_file"]: file});
      }),
    });
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

  updateSong(field, idx) {
    return event => {
      this.setState({
        songs: this.state.songs.map((song, songIdx) => {
          if (songIdx !== idx) return song;
          return merge({}, song, {[field]: event.target.value});
        })
      });
    };
  }

  handleRemoveSong(idx) {
    this.setState({
      songs: this.state.songs.map((song, songIdx) => {
        if (songIdx !== idx) return song;
        return undefined;
      })
    });
  }

  render() {
    return (
      <div className="albumFormContainer">
        <div className="albumFormBody">
          <div className="albumFormHeading">
            <span>Edit Album</span>
          </div>
          <form onSubmit={this.handleSubmit} className="albumFormBox">
            <div className="albumFormInputItem">
              <label>Album Title</label>
              <input type="text" value={this.state.album.album_title} onChange={this.updateAlbum('album_title')} className="albumFormTextBox"/>
            </div>
            <div className="albumFormInputItem">
              <label>Album Cover</label>
              <input type="file" onChange={(e) => this.fileUpload({file: e.target.files[0], type: "album_cover"})} className="albumFormFilebox"/>
            </div>
            <div className="albumFormInputItem">
              <label>Release Date</label>
              <input type="date" value={this.state.album.release_date} onChange={this.updateAlbum('release_date')} className="albumFormDateBox"/>
            </div>
            <div className="albumFormInputItem">
              <label>Album Credits</label>
              <textarea value={this.state.album.album_credits} onChange={this.updateAlbum('album_credits')} className="albumFormTextArea"></textarea>
            </div>

            <h4>Songs</h4>
              {this.state.songs.map((song, idx) => {
                if (song !== undefined) {
                  return (
                    <div key={idx} className="albumFormSongItem">
                      <input key={"title"} type="text" value={song.song_title} onChange={this.updateSong('song_title', idx)}/>
                      <input key={"tracknum"} type="text" value={song.track_number} onChange={this.updateSong('track_number', idx)}/>
                      <input key={"file"} type="file" onChange={(e) => this.songUpload({file: e.target.files[0], idx: idx})} className="albumFormSongFilebox"/>
                      <button key={"remove"} type="button" onClick={() => this.handleRemoveSong(idx)}>-</button>
                    </div>
                  );
                }
              })}
              <button type="button" onClick={this.handleAddSong}>Add Song</button>
            <input type="submit" className="albumFormSubmitButton" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
// {this.renderErrors()}

export default AlbumEditForm;
