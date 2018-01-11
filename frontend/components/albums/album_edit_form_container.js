import { connect } from 'react-redux';
import { updateAlbum, fetchAlbum, deleteAlbum, clearAlbumErrors } from '../../actions/album_actions';
import { createSong, fetchSongs, updateSong, deleteSong } from '../../actions/song_actions';
import { selectAlbum, selectSongs } from '../../reducers/selectors';
import AlbumEditForm from './album_edit_form';

const mapStateToProps = (state, { match }) => {
  const albumId = parseInt(match.params.albumId);
  const album = selectAlbum(state.entities, match.params.albumId);
  // const songs = selectSongs(state.entities, match.params.albumId);
  const songs = [];
  return {
    albumId,
    album,
    songs,
    errors: state.errors.album
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    updateAlbum: album => dispatch(updateAlbum(album)),
    fetchSongs: albumId => dispatch(fetchSongs(albumId)),
    updateSong: song => dispatch(updateSong(song)),
    createSong: song => dispatch(createSong(song)),
    deleteSong: id => dispatch(deleteSong(id)),
    deleteAlbum: id => dispatch(deleteAlbum(id)),
    clearErrors: () => dispatch(clearAlbumErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumEditForm);
