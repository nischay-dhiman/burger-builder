import React from 'react';
import { classes } from './BuildControl.css';

const BuildControl = (props) => {
  return(
    <div className={classes.BuildControl} >
      <div>{props.label}</div>
      <button>less</button>
      <button>more</button>
    </div>
  );
};

export default BuildControl;