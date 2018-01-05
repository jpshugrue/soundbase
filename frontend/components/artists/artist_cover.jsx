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
      <div>
        <div>{`${this.state.display_name}`}</div>
        <Link to={`/artists/${this.props.artistId}`}>
          <img src={this.state.cover_image}></img>
        </Link>
      </div>
    );
  }

}

export default ArtistCover;
