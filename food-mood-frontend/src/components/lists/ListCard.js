import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ListCard extends Component {


  render() {
    const { list } = this.props
    const listMeals = list ? list.attributes.meals.map(meal => <li key={meal.id}><Link to={`/meals/${meal.id}`}><h3>{meal.name}</h3></Link><h5>Meal: {meal.meal_type}</h5> <h5>Type: {meal.kind}</h5><h5>Description: {meal.description}</h5> <a href={meal.url} target="_blank">URL</a> <h5>Date: {meal.date} </h5></li>) : null

    return (
      this.props.list ?  
            <div className="ui relaxed divided list">
              <div className="item">
                
              </div>
              <h2>{list.attributes.name}</h2>
              <p>{list.attributes.description}</p>
              <div>
              <h1>MEALS ON THIS LIST:</h1>
                {listMeals}
                </div>
                <br/>
              <Link to={`/lists/${list.id}/edit`}><h5>Edit this list</h5></Link>
          </div> : 
          <p>This is the list card with no list!</p>
    );
  }
}

export default ListCard;


