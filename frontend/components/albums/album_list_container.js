import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import { selectAlbums } from '../../reducers/selectors';
import AlbumList from './album_list';

const mapStateToProps = (state, { artist, linkStyle, limit, loggedIn }) => {
  let albums;
  let artistId;
  if (artist) {
    albums = selectAlbums(state.entities, artist.id);
    artistId = artist.id;
  } else {
    albums = Object.values(state.entities.albums);
  }
  return {
    albums,
    linkStyle,
    limit,
    loggedIn,
    artistId
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps,mapDispatchToProps)(AlbumList);
