import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const ingredientControls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {ingredientControls.map((control) => {
      return <BuildControl label={control.label} key={control.type} add={() => props.add(control.type)} remove= {() => props.remove(control.type)}/>
    })}

    <button disabled={!props.purchasable}>Checkout</button>
  </div>
);

export default buildControls;