import React from 'react';
import ReactDOM from 'react-dom';

//begin testing
import * as SessionApiUtil from './util/session_api_util';
window.signup = SessionApiUtil.signup;
window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
//end testing

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Soundbase</h1>, root);
});
