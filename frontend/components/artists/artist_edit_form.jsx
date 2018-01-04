import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import merge from 'lodash/merge';

class ArtistEditForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.artist;
    window.state = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const artist = Object.assign({}, this.state);
    this.props.updateArtist(artist).then((success) => this.props.history.push(`/artists/${success.currentArtist.id}`));
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.artist);
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

  fileUpload(field) {

  }

  render() {
     return (
       <div className="artist-edit-form-container">
         <div className="artist-edit-form-body">
           <div className="artist-edit-form-heading">
              Artist Profile for {`${this.state.username}`}
           </div>
           <form onSubmit={this.handleSubmit} className="edit-artist-form-box">
             <div className="edit-artist-input-item">
               <label>Artist / band name</label>
               <input type="text" value={this.state.display_name} onChange={this.update('display_name')} className="edit-artist-form-inputbox"/>
             </div>
             <div className="edit-artist-input-item">
               <label>Profile Image</label>
               <input type="file" onChange={this.fileUpload('profile_image')}/>
            </div>
            <div className="edit-artist-input-item">
              <label>Cover Image</label>
              <input type="file" onChange={this.fileUpload('cover_image')}/>
            </div>
            <div className="edit-artist-input-item">
              <label>Background Color</label>
              <input type="color" value={this.state.background_color} onChange={this.update('background_color')}/>
            </div>
            <div className="edit-artist-input-item">
              <label>Body Color</label>
              <input type="color" value={this.state.body_color} onChange={this.update('body_color')}/>
            </div>
            <div className="edit-artist-input-item">
              <label>Text Color</label>
              <input type="color" value={this.state.text_color} onChange={this.update('text_color')}/>
            </div>
            <div className="edit-artist-input-item">
              <label>Link Color</label>
              <input type="color" value={this.state.link_color} onChange={this.update('link_color')}/>
            </div>
             <div className="artist-edit-buttons">
               <input type="submit" className="artist-edit-form-submit-btn" value="Save" />
               <Link className="artist-edit-form-cancel-btn" to={`/artists/${this.props.artistId}`}>Cancel</Link>
             </div>
           </form>
         </div>
       </div>
     );
   }
}

// {this.renderErrors()}

export default ArtistEditForm;
