import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewMealFormWrapper from '../meals/NewMealFormWrapper';

class ListCard extends Component {


  render() {
    const { list } = this.props
    const listMeals = list ? list.attributes.meals.map(meal => <li key={meal.id}><Link to={`/meals/${meal.id}`}><h5>{meal.name}</h5></Link></li>) : null

    return (
      this.props.list ?  
          <div>
            <div className="ui one column grid">
              <div className="column">
                <div className="ui fluid card">
                  <div className="content">
                    <div className="header"><h3>{list.attributes.name}</h3></div>
                    <h4>Restaurants and Recipes:</h4>
                    <ul>{listMeals}</ul>
                  </div>
                </div>
                <Link to={`/lists/${list.id}/edit`}><h5>Edit this list</h5></Link>
            </div>
          </div> 
          <h1>Add a new meal:</h1>
            <NewMealFormWrapper listId={list.id}/>  
            </div>
          : 
          <p>This is the list card with no list!</p>
    );
  }
}

export default ListCard;
