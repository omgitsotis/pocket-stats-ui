import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/Homepage'
import Auth from './containers/Auth/Auth'

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Auth} />
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
