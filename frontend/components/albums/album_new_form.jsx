import React from 'react';
import {Link} from 'react-router-dom';

class AlbumNewForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { album: this.props.album, songs: this.props.songs } ;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.albumFormData = new FormData();
  }

  handleSubmit(e) {
    e.preventDefault();
    let albumId;
    this.albumFormData.set(`album[artist_id]`, this.props.artistId);
    this.props.createAlbum(this.albumFormData).then((success) => {
      albumId = success.album.id;
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

  handleAddSong() {

  }

  render() {
    return (
      <div className="albumFormContainer">
        <div className="albumFormBody">
          <div className="albumFormHeading">
            <span>New Album</span>
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
            <input type="submit" className="albumFormSubmitButton" value="Submit" />
          </form>
        </div>
      </div>
    );
  }

}

// {this.renderErrors()}

export default AlbumNewForm;
