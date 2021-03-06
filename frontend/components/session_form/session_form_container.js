import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentArtist),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: artist => dispatch(processForm(artist)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
