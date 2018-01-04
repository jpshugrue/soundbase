import React from 'react';

import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Footer from './footer';
import HomePage from './homepage';
import HomeHeader from './header/home_header';
import SessionHeader from './header/session_header';
import ArtistShowContainer from './artists/artist_show_container';

const App = () => (
  <div>
    <header>
      <Route path="/login" component={SessionHeader} />
      <Route path="/signup" component={SessionHeader} />
      <Route exact path="/" component={HomeHeader} />
    </header>
    <main>
      <Route exact path="/" component={HomePage} />
      <Route path="/artists/:artistId" component={ArtistShowContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
