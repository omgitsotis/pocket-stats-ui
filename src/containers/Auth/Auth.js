import React, { Component } from 'react'

import classes from './Auth.css'

class Auth extends Component {
  render() {
    return (
      <div className={classes.Card}>
        <h1>Login</h1>
        <button className={classes.Button}>Login</button>
      </div>
    )
  }
}

export default Auth
