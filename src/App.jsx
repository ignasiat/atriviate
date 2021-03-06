import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import BoardList from './components/board-list/board-list';
import BoardDetail from './components/board-detail/board-detail';
import TrivialGame from './components/trivial-game/trivial-game';
import PrivateRoute from './components/privateRoute/privateroute';
import Profile from './components/profile/profile';

import store from './redux/stores/configure-store';

function App() {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain="dev-4slnahuc.eu.auth0.com"
        clientId="paLYU1sfhqve4KuQdGhA834B9ixV9Skd"
        redirectUri="http://localhost:3000/boardlist"
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/boardlist" component={BoardList} />
            <PrivateRoute path="/edit/:id" exact component={BoardDetail} />
            <PrivateRoute path="/edit" component={BoardDetail} />
            <PrivateRoute path="/game/:id" component={TrivialGame} />
          </Switch>
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  );
}

export default App;
