import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.3,
  meat: 0.9
}
class BurgerBuilder extends Component{
  state= {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    total_price: 4,
    purchasable: false
  }

  updatePurchasableHandler = (updatedIngredients) => {
    let updatedPurchasable = false;
    if(Object.values(updatedIngredients).reduce((a, b) => a + b, 0) > 0){
      updatedPurchasable = true;
    }
    else{
      updatedPurchasable = false;
    }
    this.setState({purchasable: updatedPurchasable});
  }


  addIngredientHandler = (type) => {
    let oldIngredient = this.state.ingredients[type];
    let newIngredient = oldIngredient + 1;
    let updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newIngredient
    let updatedPrice = this.state.total_price + INGREDIENT_PRICES[type]
    this.setState({
      ingredients: updatedIngredients,
      total_price: updatedPrice
    })
    this.updatePurchasableHandler(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    let oldIngredient = this.state.ingredients[type];
    let newIngredient = oldIngredient == 0 ? 0 : oldIngredient - 1;
    let updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = newIngredient
    let updatedPrice = oldIngredient == 0 ? this.state.total_price : this.state.total_price - INGREDIENT_PRICES[type]
    this.setState({
      ingredients: updatedIngredients,
      total_price: updatedPrice
    })
    this.updatePurchasableHandler(updatedIngredients);
  };
  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <h2>{this.state.total_price}</h2>
        <BuildControls add={this.addIngredientHandler} remove={this.removeIngredientHandler} purchasable={this.state.purchasable}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;