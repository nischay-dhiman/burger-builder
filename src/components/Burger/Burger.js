import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredinets = Object.keys(props.ingredients).map(ikey => {
      return [...Array(props.ingredients[ikey])]
        .map((_, i) => {     // check with console.log
          <BurgerIngredient />;
        });
    });
    
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type='meat' />
    </div>
  );
};

export default burger;