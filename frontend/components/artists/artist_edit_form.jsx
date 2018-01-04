import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import merge from 'lodash/merge';

class ArtistEditForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign(this.props.artist);
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
               //Need profile image uploader here
            </div>
            <div className="edit-artist-input-item">
              <label>Cover Image</label>
              //Need cover image uploader here
            </div>
            <div className="edit-artist-input-item">
              <label>Background Color</label>
              // Need color selector input here for background color
            </div>
            <div className="edit-artist-input-item">
              <label>Body Color</label>
              // Need color selector input here for body color
            </div>
            <div className="edit-artist-input-item">
              <label>Text Color</label>
              // Need color selector input here for text color
            </div>
            <div className="edit-artist-input-item">
              <label>Link Color</label>
              // Need color selector input here for link color
            </div>
             <div className="artist-edit-buttons">
               <input type="submit" className="artist-edit-form-submit-btn" value="Save" />
               <Link className="artist-edit-form-cancel-btn" to={`/artists/${this.props.artistId}`}></Link>
             </div>
           </form>
         </div>
       </div>
     );
   }
}

// {this.renderErrors()}

export default ArtistEditForm;
