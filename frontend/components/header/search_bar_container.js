import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchSongs } from '../../actions/song_actions';
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  return {
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums),
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
    fetchAlbums: () => dispatch(fetchAlbums()),
    fetchSongs: () => dispatch(fetchSongs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
