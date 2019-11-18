import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ikey => {
      return [...Array(props.ingredients[ikey])]
        .map((_, i) => {     // check with console.log
          return <BurgerIngredient key={ikey+i} type={ikey}/>;
        })
      }).reduce((arr, el) => { 
        return arr.concat(el) 
      }, []);

  if (transformedIngredients.length == 0){
    transformedIngredients = <p> Please add some slices </p>
  }
    
  return(
    <div className={classes.Burger}>
      <BurgerIngredient key='top' type='bread-top'/>
      {transformedIngredients}
      <BurgerIngredient key='botton' type='bread-bottom'/>
    </div>
  );
};

export default burger;