import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Publicaciones from '../pages/Publicaciones';
import Comments from '../pages/Comments';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Alert from '../components/Alert';
import PrivateRoute from '../components/routing/PrivateRoute';
import Publicar from '../pages/Publicar';

import '../styles/global.css';
import Layout from '../components/Layout';

//Redux
import {Provider} from 'react-redux';
import store from '../store';
import {loadUser} from '../actions/auth';
import setAuthToken from '../components/utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser);
  }, [])

  return (
    <Provider store = {store}>
      <Router>
      <Fragment>
        <Layout>
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/publicaciones" component={Publicaciones} />
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/register" component = {Register} />
            <PrivateRoute exact path = "/publicar" component = {Publicar} />
            <PrivateRoute exact path = "/comentarios" component = {Comments} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
