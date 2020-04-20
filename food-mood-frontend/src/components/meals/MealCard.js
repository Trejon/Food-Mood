import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MealCard extends Component {
  
  // const { list } = this.props
  // const listMeals = list ? list.attributes.meals.map(meal => <li key={meal.id}><Link to={`/meals/${meal.id}`}><h3>{meal.name}</h3></Link><h5>Meal: {meal.meal_type}</h5> <h5>Type: {meal.kind}</h5><h5>Description: {meal.description}</h5> <a href={meal.url} target="_blank">URL</a> <h5>Date: {meal.date} </h5></li>) : null

  render() {
    const { meal } = this.props
    return (
       meal ? <div className="ui relaxed divided list">
                <div className="item">
                   
                  </div>
                  <h2>{meal.attributes.name}</h2>
                  <p>{meal.attributes.kind}</p>
                  <p>{meal.attributes.meal_type}</p>
                  <p>{meal.attributes.description}</p>
                  <p>{meal.attributes.url}</p>
                  <p>{meal.attributes.meal_date}</p>
                  <div>
                    </div>
                    <br/>
                  <Link to={`/meals/${meal.id}/edit`}><h5>Edit this meal</h5></Link>
              </div> : 
              <p>This is the meal card with no meal!</p>
        );  
  }
}

export default MealCard;