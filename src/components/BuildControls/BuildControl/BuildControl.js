import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div>{props.label}</div>
    <button onClick={props.remove}>less</button>
    <button onClick={props.add}>more</button>
  </div>
);

//  className={classes.BuildControl}

export default buildControl;