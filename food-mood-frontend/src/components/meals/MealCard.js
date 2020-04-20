import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MealCard extends Component {


  render() {
    // const { list } = this.props
    // const listMeals = list ? list.attributes.meals.map(meal => <li key={meal.id}><Link to={`/meals/${meal.id}`}><h3>{meal.name}</h3></Link><h5>Meal: {meal.meal_type}</h5> <h5>Type: {meal.kind}</h5><h5>Description: {meal.description}</h5> <a href={meal.url} target="_blank">URL</a> <h5>Date: {meal.date} </h5></li>) : null

    return (
       <div>
        <h1>This is your meal card!:</h1>
      </div>
    );
  }
}

export default MealCard;


