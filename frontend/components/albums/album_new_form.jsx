import React from 'react';
import {Link} from 'react-router-dom';
import merge from 'lodash/merge';

class AlbumNewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { album: this.props.album, songs: this.props.songs } ;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.albumFormData = new FormData();
    this.handleAddSong = this.handleAddSong.bind(this);
    this.handleRemoveSong = this.handleRemoveSong.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let albumId;
    this.albumFormData.set(`album[artist_id]`, this.props.artistId);
    this.props.createAlbum(this.albumFormData).then((success) => {
      albumId = success.album.id;
      let songFormData;
      for (const idx in this.state.songs) {
        songFormData = new FormData();
        songFormData.set(`song[song_title]`, this.state.songs[idx].song_title);
        songFormData.set(`song[track_number]`, this.state.songs[idx].track_number);
        songFormData.set(`song[song_file]`, this.state.songs[idx].song_file);
        songFormData.set(`song[artist_id]`, this.props.artistId);
        songFormData.set(`song[album_id]`, albumId);
        this.props.createSong(songFormData);
      }
      this.props.refresh(this.props.artistId);
      this.props.history.push(`/albums/${albumId}`);
    });

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
        }),
      });
    };
  }

  handleRemoveSong(idx) {
    this.setState({
      songs: this.state.songs.filter((song, songIdx) => idx !== songIdx)
    });
  }

  render() {
    return (
      <div className="albumFormContainer">
        <div className="albumFormBody">
          <div className="albumFormHeading">
            New Album
          </div>
          <form onSubmit={this.handleSubmit} className="albumFormBox">
            <div className="albumFormInputItem">
              <label>Album Title</label>
              <input type="text" value={this.state.album_title} onChange={this.updateAlbum('album_title')} className="albumFormTextBox"/>
            </div>
            <div className="albumFormInputItem">
              <label>Album Cover</label>
              <input type="file" onChange={(e) => this.fileUpload({file: e.target.files[0], type: "album_cover"})} className="albumFormFilebox"/>
            </div>
            <div className="albumFormInputItem">
              <label>Release Date</label>
              <input type="date" value={this.state.release_date} onChange={this.updateAlbum('release_date')} className="albumFormDateBox"/>
            </div>
            <div className="albumFormInputItem">
              <label>Album Credits</label>
              <textarea value={this.state.album_credits} onChange={this.updateAlbum('album_credits')} className="albumFormTextArea"></textarea>
            </div>
            <div className="albumFormHeading">Songs</div>
            <div className="albumFormList">
              {this.state.songs.map((song, idx) => (
                <div key={idx} className="albumFormSongItem">
                  <div className="albumFormSongRow">
                    <label>Song Title</label>
                    <input key={"title"} type="text" value={song.song_title} onChange={this.updateSong('song_title', idx)} className="albumFormTextBox"/>
                  </div>
                  <div className="albumFormSongRow">
                    <label>Track Number</label>
                    <input key={"tracknum"} type="text" value={song.track_number} onChange={this.updateSong('track_number', idx)} className="albumFormTrackBox"/>
                  </div>
                  <div className="albumFormSongRow">
                    <label>Song File</label>
                    <input key={"file"} type="file" onChange={(e) => this.songUpload({file: e.target.files[0], idx: idx})} className="albumFormSongFilebox"/>
                  </div>
                  <a key={"remove"} onClick={() => this.handleRemoveSong(idx)}>remove song</a>
                </div>
              ))}
              <a type="button" onClick={this.handleAddSong}>add song</a>
            </div>
            <div className="albumFormButtons">
              <input type="submit" className="albumFormSubmitBtn" value="Save" />
              <Link className="albumFormCancelBtn" to={`/albums/${this.props.albumId}`}>Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

}
// {this.renderErrors()}

export default AlbumNewForm;
