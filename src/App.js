import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/HomepageContainer';
import Advanced from './containers/Advanced/AdvancedContainer';
import Graphs from './containers/Graphs/GraphsContainer';
import Auth from './containers/Auth/Auth'
import * as actions from './store/actions';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Layout isAuthed={this.props.isAuthenticated}>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/advanced" exact component={Advanced} />
            <Route path="/graphs" exact component={Graphs} />
            <Redirect to="/" />
          </Switch>
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
