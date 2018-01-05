import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import merge from 'lodash/merge';

class ArtistEditForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.artist;
    window.state = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fileUpload = this.fileUpload.bind(this);
    this.formData = new FormData();
  }

  handleSubmit(e) {
    e.preventDefault();
    // const artist = Object.assign({}, this.state);
    // this.props.updateArtist(artist).then((success) => this.props.history.push(`/artists/${success.currentArtist.id}`));
    debugger
    this.props.updateArtist({formData: this.formData, artistId: this.props.artistId}).then((success) => this.props.history.push(`/artists/${this.props.artistId}`));
  }

  update(field) {
    // return event => this.setState({
    //   [field]: event.currentTarget.value
    // });
    return event => {
      this.setState({[field]: event.currentTarget.value});
      console.log(`update is called and state is now ${this.state}`);
      this.formData.append(`artist[${field}]`, event.target.value);
      console.log(`update is called and formData is now ${this.formData}`);
      // debugger
    };
  }

  // fileUpload(field) {
  //   // debugger
  //   return event => {
  //     const reader = new FileReader();
  //     const file = event.target.files[0];
  //     reader.onloadend = () => {
  //       this.formData.append(`artist[${field}]`, file);
  //       console.log(`file upload is called and formdata is now ${this.formData}`);
  //
  //     };
  //   };
  // }

  fileUpload({file, type}) {
    // debugger
      // const reader = new FileReader();
      this.formData.append(`artist[${type}]`, file);
      // reader.onloadend = () => {
        // this.formData.append(`artist[${field}]`, file);
        // console.log(`file upload is called and formdata is now ${this.formData}`);
      // };
      // reader.readAsDataURL(file);
  }

  handleChange({file, type})
  {
    console.log(file);
    console.log(type);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.artist);
    window.state = this.state;
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
               <input type="file" onChange={(e) => this.fileUpload({file: e.target.files[0], type: "profile_pic"})}/>
            </div>
            <div className="edit-artist-input-item">
              <label>Cover Image</label>
              <input type="file" onChange={(e) => this.fileUpload({file: e.target.files[0], type: "cover_image"})}/>
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
