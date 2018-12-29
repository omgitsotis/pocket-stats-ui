import React, { Component } from 'react'
import { connect } from 'react-redux';

import classes from './Auth.css'
import * as actions from '../../store/actions';

class Auth extends Component {
  onLoginClicked = () => {
    this.props.getPocketToken();
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

const mapStateToProps = () => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPocketToken: () => dispatch(actions.getPocketToken())
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( Auth );
