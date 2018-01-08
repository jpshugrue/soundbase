import React from 'react';

import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Footer from './footer';
import HomePage from './homepage/homepage';
import HomeHeader from './header/home_header';
import SessionHeader from './header/session_header';
import ArtistShowContainer from './artists/artist_show_container';
import MainHeader from './header/main_header';
import ArtistEditContainer from './artists/artist_edit_container';
import AlbumFormContainer from './albums/album_form_container';

const App = () => (
  <div>
    <header>
      <Route path="/login" component={SessionHeader} />
      <Route path="/signup" component={SessionHeader} />
      <Route exact path="/" component={HomeHeader} />
      <Route path="/artists/" component={MainHeader} />
      <Route path="/albums/" component={MainHeader} />
    </header>
    <main>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/artists/:artistId" component={ArtistShowContainer} />
      <Route path="/artists/:artistId/edit" component={ArtistEditContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

// <Route path="/albums/new" component={AlbumFormContainer} />
// <Route exact path="/albums/:albumId/edit" component={AlbumFormContainer} />

export default App;
