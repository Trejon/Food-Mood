import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

class MealCard extends Component {
  
  // const { list } = this.props
  // const listMeals = list ? list.attributes.meals.map(meal => <li key={meal.id}><Link to={`/meals/${meal.id}`}><h3>{meal.name}</h3></Link><h5>Meal: {meal.meal_type}</h5> <h5>Type: {meal.kind}</h5><h5>Description: {meal.description}</h5> <a href={meal.url} target="_blank">URL</a> <h5>Date: {meal.date} </h5></li>) : null

  render() {
    const { meal } = this.props
    return (
       meal ? <div className="ui centered card" style={{width: '500px'}}>
                <div className="center aligned content">
                  <div className="header">
                    <h2>{meal.attributes.name}</h2>
                  </div>
                  <div className="meta">
                    <p>{meal.attributes.kind}</p>
                  </div>
                  <div className="description">
                    <ul>
                      <h4>{meal.attributes.meal_type}</h4>
                      <h4>{meal.attributes.description}</h4>
                      <h4>{format(new Date(meal.attributes.meal_date), 'MM-dd-yyyy')}</h4>
                      <h5><a href={meal.attributes.url} target="_blank" rel="noopener noreferrer">Website</a></h5>
                    </ul>
                  </div>
                </div>
                <div className="center aligned extra content">
                  <Link className="ui button primary" to={`/meals/${meal.id}/edit`}><h5>Edit this meal</h5></Link>
                </div>
              </div> : 
              <p>This is the meal card with no meal!</p>
        );  
  }
}

export default MealCard;