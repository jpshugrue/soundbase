import { connect } from 'react-redux';
import { updateArtist, fetchArtist } from '../../actions/artist_actions';
import { selectArtist } from '../../reducers/selectors';
import ArtistEditForm from './artist_edit_form';

const mapStateToProps = (state, { match }) => {
  const artistId = parseInt(match.params.artistId);
  const artist = selectArtist(state.entities, match.params.artistId);
  return {
    artistId,
    artist
  };
};

const mapDispatchToProps = dispatch => ({
  updateArtist: artist => dispatch(updateArtist(artist)),
  fetchArtist: id => dispatch(fetchArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistEditForm);