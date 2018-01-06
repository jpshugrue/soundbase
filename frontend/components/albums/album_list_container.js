import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions/album_actions';
import { selectAlbums } from '../../reducers/selectors';
import AlbumList from './album_list';

const mapStateToProps = (state, { artist, linkStyle, limit}) => {
  let albums;
  if (artist) {
    albums = selectAlbums(state.entities, artist.id);
  } else {
    albums = Object.values(state.entities.albums);
  }
  return {
    albums,
    linkStyle,
    limit
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps,mapDispatchToProps)(AlbumList);
