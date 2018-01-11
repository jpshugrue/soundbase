import { connect } from 'react-redux';
import { updateArtist, fetchArtist, clearArtistErrors } from '../../actions/artist_actions';
import { refresh } from '../../actions/session_actions';
import { selectArtist } from '../../reducers/selectors';
import ArtistEditForm from './artist_edit_form';

const mapStateToProps = (state, { match }) => {
  const artistId = parseInt(match.params.artistId);
  const artist = selectArtist(state.entities, match.params.artistId);
  return {
    artistId,
    artist,
    errors: state.errors.artist
  };
};

const mapDispatchToProps = dispatch => ({
  updateArtist: artist => dispatch(updateArtist(artist)),
  fetchArtist: id => dispatch(fetchArtist(id)),
  refresh: id => dispatch(refresh(id)),
  clearArtistErrors: () => dispatch(clearArtistErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistEditForm);
