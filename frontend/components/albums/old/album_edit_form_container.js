import { connect } from 'react-redux';
import { updateAlbum, fetchAlbum, createAlbum } from '../../actions/album_actions';
import { createSong, fetchSongs, updateSong, deleteSong } from '../../actions/song_actions';
import { selectAlbum, selectSongs } from '../../reducers/selectors';
import AlbumEditForm from './album_edit_form';

const mapStateToProps = (state, { match }) => {
  let albumId;
  let artistId;
  let songs;
  let album;
  if (match.params.albumId) {
    albumId = parseInt(match.params.albumId);
    album = selectAlbum(state.entities, match.params.albumId);
    songs = selectSongs(state.entities, match.params.albumId);
  } else {
    artistId = parseInt(match.params.artistId);
    album = {
      album_title: "",
      release_date: "",
      album_credits: ""
    };
    songs = [];
  }
  return {
    artistId,
    albumId,
    album,
    songs
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    updateAlbum: album => dispatch(updateAlbum(album)),
    fetchSongs: albumId => dispatch(fetchSongs(albumId)),
    updateSong: song => dispatch(updateSong(song)),
    createSong: song => dispatch(createSong(song)),
    createAlbum: album => dispatch(createAlbum(album)),
    deleteSong: id => dispatch(deleteSong(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumEditForm);
