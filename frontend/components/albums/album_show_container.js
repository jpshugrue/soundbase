import { connect } from 'react-redux';
import { fetchSongsByAlbum } from '../../actions/song_actions';
import { selectSongs } from '../../reducers/selectors';
import AlbumShow from './album_show';

const mapStateToProps = (state, { album, artist, albumId }) => {
  const songs = selectSongs(state.entities, albumId);
  return {
    albumId,
    album,
    artist,
    songs
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchSongsByAlbum: (albumId) => dispatch(fetchSongsByAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
