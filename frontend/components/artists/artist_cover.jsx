import React from 'react';
import {Link} from 'react-router-dom';

class ArtistCover extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.artist;
    // this.loadImage = this.loadImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.artist);
  }

  render() {
    return (
      <Link to={`/artists/${this.props.artistId}`}>
        <img className="artistCoverImage" src={this.state.cover_image}></img>
      </Link>
    );
  }

}

export default ArtistCover;
