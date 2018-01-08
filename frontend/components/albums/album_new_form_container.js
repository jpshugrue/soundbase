import { connect } from 'react-redux';
import { createAlbum } from '../../actions/album_actions';
import { createSong } from '../../actions/song_actions';
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
    songs
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  return {
    createAlbum: album => dispatch(createAlbum(album)),
    createSong: song => dispatch(createSong(song))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumNewForm);
