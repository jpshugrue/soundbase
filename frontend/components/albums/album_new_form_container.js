import { connect } from 'react-redux';
import { createAlbum, clearAlbumErrors } from '../../actions/album_actions';
import { createSong, clearSongErrors } from '../../actions/song_actions';
import { refresh } from '../../actions/session_actions';
import AlbumNewForm from './album_new_form';

const mapStateToProps = (state, { match }) => {
  let artistId = parseInt(match.params.artistId);
  let songs = [];
  let album = {
    album_title: "",
    release_date: "",
    album_credits: ""
  };
  return {
    artistId,
    album,
    songs,
    albumErrors: state.errors.album,
    songErrors: state.errors.song
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  return {
    createAlbum: album => dispatch(createAlbum(album)),
    createSong: song => dispatch(createSong(song)),
    refresh: id => dispatch(refresh(id)),
    clearAlbumErrors: () => dispatch(clearAlbumErrors()),
    clearSongErrors: () => dispatch(clearSongErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumNewForm);
