import React from 'react';
import {Link} from 'react-router-dom';
import merge from 'lodash/merge';
import { selectSongs } from '../../reducers/selectors';

class AlbumForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { album: this.props.album, songs: this.props.songs } ;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.albumFormData = new FormData();
    this.handleAddSong = this.handleAddSong.bind(this);
    this.handleRemoveSong = this.handleRemoveSong.bind(this);
    this.handleDeleteAlbum = this.handleDeleteAlbum.bind(this);

    this.submitting = false; // submit lock
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.albumId ? this.editSubmit(e) : this.newSubmit(e);
  }

  newSubmit(e) {
    if (!this.submitting) {
      this.submitting = true;
      this.albumFormData.set(`album[artist_id]`, this.props.artistId);
      this.props.createAlbum(this.albumFormData).then((success) => {
        const albumId = success.album.id;
        let allSuccessful = true;
        for (const idx in this.state.songs) {
          this.props.createSong(this.packageSong(this.state.songs[idx], albumId));
        }
        this.props.refresh(this.props.artistId);
        this.props.history.push(`/albums/${albumId}`);
      });
    }
  }

  packageSong(song, albumId) {
    const songFormData = new FormData();
    songFormData.set(`song[song_title]`, song.song_title);
    songFormData.set(`song[track_number]`, song.track_number);
    songFormData.set(`song[song_file]`, song.song_file);
    songFormData.set(`song[artist_id]`, this.props.artistId);
    songFormData.set(`song[album_id]`, albumId);
    return songFormData;
  }

  editSubmit(e) {
    debugger
    this.props.updateAlbum({formData: this.albumFormData, albumId: this.props.albumId});
    for (const idx in this.state.songs) {
      if (this.state.songs[idx].delete) {
        if (this.state.songs[idx].id) {
          this.props.deleteSong(this.state.songs[idx].id);
        }
      } else {
        const songFormData = this.packageSong(this.state.songs[idx], this.props.albumId);
        if (this.state.songs[idx].id) {
          this.props.updateSong({formData: songFormData, songId: this.state.songs[idx].id});
        } else {
          this.props.createSong(songFormData);
        }
      }
    }
    this.props.history.push(`/albums/${this.props.albumId}`);
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

  heading() {
    if (this.props.albumId) {
      return <div className="albumFormHeading">Edit Album <a onClick={this.handleDeleteAlbum} className="deleteAlbumButton">delete album</a></div>;
    } else {
      return 'New Album';
    }
  }

  cancelButton() {
    let link;
    link = this.props.albumId ? `/albums/${this.props.albumId}` : `/artists/${this.props.artistId}`;
    return <Link className="albumFormCancelBtn" to={link}>Cancel</Link>;
  }

  componentDidMount() {
    debugger
    if (this.props.albumId) {
      this.props.fetchAlbum(this.props.albumId).then((success) => {
        this.albumFormData.set(`album[album_title]`, success.album.album_title);
        this.setState({album: success.album});
        this.props.fetchSongs().then((success) => {
          const songs = selectSongs({songs: success.songs}, this.state.album.id);
          this.setState({songs: songs});
        });
      });
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

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
    if (this.props.albumId) {
      this.setState({
        songs: this.state.songs.map((song, songIdx) => {
          if (songIdx !== idx) return song;
          return {id: song.id, delete: true};
        })
      });
    } else {
      this.setState({
        songs: this.state.songs.filter((song, songIdx) => idx !== songIdx)
      });
    }
  }

  handleDeleteAlbum() {
    const artistId = this.props.album.artist_id;
    this.state.songs.forEach((song) => {
      this.props.deleteSong(song.id);
    });
    this.props.deleteAlbum(this.props.albumId).then((success) => {
      this.props.history.push(`/artists/${artistId}`);
    });
  }

  render() {
    return (
      <div className="albumFormContainer">
        <div className="albumFormBody">
          <div className="albumFormHeading">
            { this.heading() }
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
            {this.renderErrors()}
            <div className="albumFormHeading">Songs</div>
            <div className="albumFormList">
              {this.state.songs.map((song, idx) => {
                if (!song.delete) {
                  return (
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
                  );
              }})}
              <a type="button" onClick={this.handleAddSong}>add song</a>
            </div>
            <div className="albumFormButtons">
              <input type="submit" className="albumFormSubmitBtn" value="Save"/>
              { this.cancelButton() }
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default AlbumForm;
