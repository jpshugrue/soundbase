import React from 'react';
import {Link} from 'react-router-dom';
import ArtistShow from './artist_show';

class ArtistList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtists();
  }

  renderArtists(artists) {
    return artists.slice(0,this.props.limit).map((artist, i) => {
      return <li key={`${i}`} className="artistListItem">
        <Link to={`/artists/${artist.id}`} key="Link">
          <ArtistShow artist={artist} />
        </Link>
      </li>;
    });
  }

  render() {
    return (
      <ul className="artistListUL">
        {this.renderArtists(this.props.artists)}
      </ul>
    );
  }

}

export default ArtistList;
