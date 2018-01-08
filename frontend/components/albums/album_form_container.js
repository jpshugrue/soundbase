import { connect } from 'react-redux';
import { updateAlbum, fetchAlbum, createAlbum } from '../../actions/album_actions';
import { fetchSongs, createSong, updateSong, deleteSong } from '../../actions/song_actions';
import { selectAlbum, selectSongs } from '../../reducers/selectors';
import AlbumForm from './album_form';

const mapStateToProps = (state, { match }) => {
  let albumId;
  let artistId;
  let songs = [];
  let formType = "create";
  let album = {
    album_title: "",
    release_date: "",
    album_credits: ""
  };
  if (match.params.albumId) {
    albumId = parseInt(match.params.albumId);
    album = selectAlbum(state.entities, match.params.albumId);
    songs = selectSongs(state.entities, match.params.albumId);
    formType = "edit";
  } else {
    artistId = parseInt(match.params.artistId);
  }
  return {
    albumId,
    artistId,
    album,
    songs,
    formType
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  if (match.params.albumId) {
    return {
      formAction: album => dispatch(updateAlbum(album)),
      fetchAlbum: id => dispatch(fetchAlbum(id)),
      fetchSongs: albumId => dispatch(fetchSongs(albumId)),
      updateSong: song => dispatch(updateSong(song)),
      createSong: song => dispatch(createSong(song))
    };
  } else {
    return {
      formAction: album => dispatch(createAlbum(album)),
      createSong: song => dispatch(createSong(song))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
