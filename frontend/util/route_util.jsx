import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const ArtistEditProtected = ({component: Component, path, loggedIn, sameArtistEdit}) => {
  return <Route path={path} render={(props) => {
    if (loggedIn && sameArtistEdit(props.location.pathname)) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }}/>;
};

const NewAlbumProtected = ({component: Component, path, loggedIn, sameArtistNew}) => {
  return <Route path={path} render={(props) => {
    if (loggedIn && sameArtistNew(props.location.pathname)) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }}/>;
};

const EditAlbumProtected = ({component: Component, path, loggedIn, artistHasAlbum}) => {
  return <Route path={path} render={(props) => {
    if (loggedIn && artistHasAlbum(props.location.pathname)) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }}/>;
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentArtist),
          sameArtistEdit: (pathname) => (pathname === `/artists/${state.session.currentArtist.id}/edit`),
          sameArtistNew: (pathname) => (pathname === `/artists/${state.session.currentArtist.id}/newAlbum`),
          artistHasAlbum: (pathname) => {
            for (const albumId of state.session.currentArtist.album_ids) {
              if (pathname === `/albums/${albumId}/edit`) {
                return true;
              }
            }
            return false;
          }
        };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const EditArtistProtectedRoute = withRouter(connect(mapStateToProps, null)(ArtistEditProtected));
export const NewAlbumProtectedRoute = withRouter(connect(mapStateToProps, null)(NewAlbumProtected));
export const EditAlbumProtectedRoute = withRouter(connect(mapStateToProps, null)(EditAlbumProtected));
