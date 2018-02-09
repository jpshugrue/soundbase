import { connect } from 'react-redux';
import { createAlbum, updateAlbum, fetchAlbum, deleteAlbum, clearAlbumErrors } from '../../actions/album_actions';
import { createSong, fetchSongs, updateSong, deleteSong } from '../../actions/song_actions';
import { selectAlbum, selectSongs } from '../../reducers/selectors';
import { refresh } from '../../actions/session_actions';
import AlbumForm from './album_form';

const mapStateToProps = (state, { match }) => {
  let albumId, artistId, album;
  if (match.params.albumId) {
    albumId = parseInt(match.params.albumId);
    album = selectAlbum(state.entities, match.params.albumId);
  } else {
    artistId = parseInt(match.params.artistId);
    album = { album_title: "", release_date: "", album_credits: "" };
  }
  const songs = [];
  return { artistId, albumId, album, songs, errors: state.errors.album };
};

const mapDispatchToProps = (dispatch, { match }) => {
  return {
    createAlbum: album => dispatch(createAlbum(album)),
    refresh: id => dispatch(refresh(id)),
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
