import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Footer from './footer';
import HomePage from './homepage';

const App = () => (
  <div>
    <header>
      <h1>This is Soundbase</h1>
      <GreetingContainer />
    </header>
    <main>
      <Route exact path="/" component={HomePage} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
