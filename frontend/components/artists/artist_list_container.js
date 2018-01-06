import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artist_actions';
import { selectArtists } from '../../reducers/selectors';
import ArtistList from './artist_list';

const mapStateToProps = (state, { limit }) => {
  return {
    artists: Object.values(state.entities.artists),
    limit
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps,mapDispatchToProps)(ArtistList);
