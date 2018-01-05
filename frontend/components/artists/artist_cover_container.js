import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import { selectArtist } from '../../reducers/selectors';
import ArtistCover from './artist_cover';

const mapStateToProps = (state, { match }) => {
  const artistId = parseInt(match.params.artistId);
  const artist = selectArtist(state.entities, match.params.artistId);
  return {
    artistId,
    artist
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArtist: id => dispatch(fetchArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistCover);
