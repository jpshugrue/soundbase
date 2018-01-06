import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import { selectAlbums } from '../../reducers/selectors';
import AlbumList from './album_list';

const mapStateToProps = (state, { artist, linkStyle}) => {
  let albums;
  if (artist) {
    albums = selectAlbums(state.entities, artist.id);
  } else {
    albums = state.entities.albums;
  }
  return {
    albums,
    linkStyle
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps,mapDispatchToProps)(AlbumList);
