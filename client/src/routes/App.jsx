import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Publicaciones from '../pages/Publicaciones';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Alert from '../components/Alert';
//Redux
import {Provider} from 'react-redux';
import store from '../store';

import '../styles/global.css';
import Layout from '../components/Layout';
import setAuthToken from '../utils/setAuthToken';
import {loadUser} from '../actions/auth';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser);
  }, [])

  return (
    <Provider store = {store}>
      <BrowserRouter>
      <Fragment>
        <Layout>
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/publicaciones" component={Publicaciones} />
            <Route exact path = "/login" component = {Login} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
