import React from 'react';
import {Link} from 'react-router-dom';

class ArtistShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.artist;
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.artist);
  }

  render() {
    return (
      <div className="artistShowContainer">
        <div className="artistProfilePic">
          <img src={this.state.profile_pic} className="profilePic"></img>
        </div>
        <div className="artistShowName">
          {this.state.display_name}
        </div>
      </div>
    );
  }

}

export default ArtistShow;
