import React, { Component } from 'react'

import Aux from '../Aux/Aux'
import Navigation from '../../components/Navigation/Navigation';
import classes from './Layout.css'

class Layout extends Component {
  state = {
    showSideDrawer : false
  }

  sideDrawerClosedHandler = () => {
      this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
      this.setState( ( prevState ) => {
          return { showSideDrawer: !prevState.showSideDrawer };
      } );
  }

  render() {
    return (
      <Aux>
        <Navigation isAuthed={this.props.isAuthed} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout
