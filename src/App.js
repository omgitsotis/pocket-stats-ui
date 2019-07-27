import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/HomepageContainer'
import Auth from './containers/Auth/Auth'
import * as actions from './store/actions';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Auth} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Redirect to="/" />
        </Switch>
      )
    };

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.toJS().isAuthenticated,
    loading: state.auth.toJS().loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.checkAuthenticated() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
