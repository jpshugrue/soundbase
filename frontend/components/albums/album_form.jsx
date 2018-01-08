import React from 'react';
import {Link} from 'react-router-dom';

class AlbumForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.album ;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formData = new FormData();
  }

  handleSubmit(e) {
    e.preventDefault();
    let albumId;
    if (this.props.artistId) {
      //create
      this.formData.append(`album[artist_id]`, this.props.artistId);
    }
    this.props.formAction(this.formData).then((success) => {
      albumId = success.album.id;
      console.log(`Album id is ${albumId}`);
    });
    // this.props.updateArtist({formData: this.formData, artistId: this.props.artistId}).then((success) => this.props.history.push(`/artists/${this.props.artistId}`));
  }

  update(field) {
    return event => {
      this.setState({[field]: event.currentTarget.value});
      this.formData.append(`album[${field}]`, event.target.value);
    };
  }

  fileUpload({file, type}) {
    this.formData.append(`album[${type}]`, file);
  }

  componentDidMount() {
    if (this.props.fetchAlbum) {
      this.props.fetchAlbum(this.props.albumId);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.album);
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  heading(formType) {
    if (formType === "create") {
      return "New Album";
    } else {
      return "Edit Album";
    }
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

  render() {
    return (
      <div className="albumFormContainer">
        <div className="albumFormBody">
          <div className="albumFormHeading">
            <span>{this.heading(this.props.formType)}</span>
          </div>
          <form onSubmit={this.handleSubmit} className="albumFormBox">
            <div className="albumFormInputItem">
              <label>Album Title</label>
              <input type="text" value={this.state.album_title} onChange={this.update('album_title')} className="albumFormTextBox"/>
            </div>
            <div className="albumFormInputItem">
              <label>Album Cover</label>
              <input type="file" onChange={(e) => this.fileUpload({file: e.target.files[0], type: "album_cover"})} className="albumFormFilebox"/>
            </div>
            <div className="albumFormInputItem">
              <label>Release Date</label>
              <input type="date" value={this.state.release_date} onChange={this.update('release_date')} className="albumFormDateBox"/>
            </div>
            <div className="albumFormInputItem">
              <label>Album Credits</label>
              <textarea value={this.state.album_credits} onChange={this.update('album_credits')} className="albumFormTextArea"></textarea>
            </div>
            <input type="submit" className="albumFormSubmitButton" value="Submit" />
          </form>
        </div>
      </div>
    );
  }

}

// {this.renderErrors()}

export default AlbumForm;
