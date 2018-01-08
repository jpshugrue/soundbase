import { connect } from 'react-redux';
import { updateAlbum, fetchAlbum, createAlbum } from '../../actions/album_actions';
import { selectAlbum } from '../../reducers/selectors';
import AlbumForm from './album_form';

const mapStateToProps = (state, { match }) => {
  let albumId;
  let formType = "create";
  let album = {
    album_title: "",
    release_date: "",
    album_credits: ""
  };
  if (match.params.albumId) {
    albumId = parseInt(match.params.albumId);
    album = selectAlbum(state.entities, match.params.albumId);
    formType = "edit";
  }
  return {
    albumId,
    album,
    formType
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  if (match.params.albumId) {
    return {
      formAction: album => dispatch(updateAlbum(album)),
      fetchAlbum: fetchAlbum
    };
  } else {
    return {
      formAction: album => dispatch(createAlbum(album))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
