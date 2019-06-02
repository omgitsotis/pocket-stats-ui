import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './Auth.css'
import * as actions from '../../store/actions';

class Auth extends Component {
  onLoginClicked = () => {
    this.props.getPocketToken();
  }

  componentDidUpdate(prevProps) {
    console.log("Auth componentDidUpdate")
    if (this.props.url && prevProps.url === '') {
      var win = window.open(this.props.url, '_blank');
      win.focus();
      return
    }
  }

  render() {
    return (
      <div className={classes.Card}>
        <h1>Login</h1>
        <button className={classes.Button} onClick={this.onLoginClicked}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const stateJS = state.auth.toJS()
  return {
    url: stateJS.link,
    isAuthenticated: stateJS.isAuthenticated
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPocketToken: () => dispatch(actions.getPocketToken())
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( Auth );
