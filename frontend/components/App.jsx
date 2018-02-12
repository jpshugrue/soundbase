import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, EditArtistProtectedRoute, NewAlbumProtectedRoute, EditAlbumProtectedRoute } from '../util/route_util';
import HomeFooter from './footer';
import MainFooter from './main_footer';
import HomePage from './homepage/homepage';
import HomeHeader from './header/home_header';
import SessionHeader from './header/session_header';
import ArtistShowContainer from './artists/artist_show_container';
import MainHeader from './header/main_header';
import ArtistEditContainer from './artists/artist_edit_container';
import AlbumFormContainer from './albums/album_form_container';
import AlbumShowPageContainer from './albums/album_show_page_container';

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
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/artists/:artistId" component={ArtistShowContainer} />
      <EditArtistProtectedRoute path="/artists/:artistId/edit" component={ArtistEditContainer} />
      <Route exact path="/albums/:albumId" component={AlbumShowPageContainer} />
      <NewAlbumProtectedRoute path="/artists/:artistId/newAlbum" component={AlbumFormContainer} />
      <EditAlbumProtectedRoute exact path="/albums/:albumId/edit" component={AlbumFormContainer} />
    </main>
    <footer>
      <Route exact path="/" component={HomeFooter}/>
      <Route path="/login" component={HomeFooter}/>
      <Route path="/signup" component={HomeFooter}/>
      <Route path="/artists" component={MainFooter}/>
      <Route path="/albums" component={MainFooter}/>
    </footer>
  </div>
);

export default App;
