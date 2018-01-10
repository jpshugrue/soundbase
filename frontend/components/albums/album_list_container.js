import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { selectAlbums } from '../../reducers/selectors';
import AlbumList from './album_list';

const mapStateToProps = (state, { artist, linkStyle, limit, loggedIn, includeArtistName }) => {
  let albums;
  let artistId;
  if (artist) {
    albums = selectAlbums(state.entities, artist.id);
    artistId = artist.id;
  } else {
    albums = Object.values(state.entities.albums);
  }
  return {
    artists: state.entities.artists,
    albums,
    linkStyle,
    limit,
    loggedIn,
    artistId,
    includeArtistName
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps,mapDispatchToProps)(AlbumList);
