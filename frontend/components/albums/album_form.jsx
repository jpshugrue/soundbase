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

    this.submitting = false;
  }

  heading() {
    if (this.props.albumId) {
      return 'Edit Album';
    } else {
      return 'New Album';
    }
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
            {this.renderAlbumErrors()}
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
              <input type="submit" className="albumFormSubmitBtn" value="Save"/>
              <Link className="albumFormCancelBtn" to={`/artists/${this.props.artistId}`}>Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default AlbumForm;
