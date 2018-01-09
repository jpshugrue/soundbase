import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { selectAlbum, selectArtist } from '../../reducers/selectors';
import AlbumShowPage from './album_show_page';

const mapStateToProps = (state, { match }) => {
    const albumId = parseInt(match.params.albumId);
    const album = selectAlbum(state.entities, match.params.albumId);
    const artist = selectArtist(state.entities, album.artist_id);
  return {
    albumId,
    album,
    artist
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  fetchArtist: (id) => dispatch(fetchArtist(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(AlbumShowPage);
