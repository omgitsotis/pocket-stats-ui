import React from 'react'

import classes from './Button.css';

const button = ({title, clickHandler}) => (
  <button className={classes.Button} onClick={clickHandler}>
    {title}
  </button>
);

export default button;
