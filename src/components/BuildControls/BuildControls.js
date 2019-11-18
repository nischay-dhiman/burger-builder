import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
  return(
    <div>
      <BuildControl label='salad'/>
    </div>
  );
};

export default buildControls;