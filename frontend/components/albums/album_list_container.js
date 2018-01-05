import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import { selectAlbums } from '../../reducers/selectors';
import AlbumList from './album_list';

const mapStateToProps = (state, { match }) => {
  let albums;
  if (match.params.artistId) {
    albums = selectAlbums(state.entities, parseInt(match.params.artistId));
  } else {
    albums = state.entities.albums;
  }
  return {
    albums
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps,mapDispatchToProps)(AlbumList);
