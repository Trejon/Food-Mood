import React from 'react';
import { updateMeal, deleteMeal, createMeal } from '../../actions/myMeals'; 
import {  setFormDataForEdit, resetMealForm } from '../../actions/mealForm';
import { connect } from 'react-redux';
import MealForm from './MealForm';
import { render } from 'react-dom';
import {v1 as uuid} from 'uuid';

class EditMealFormWrapper extends React.Component {
  componentDidMount() { 
    if (this.props.recipe){
      let meal = {
        attributes: {
          name: this.props.recipe.title,
          meal_type: '',
          kind: 'recipe',
          description: '',
          url: this.props.recipe.source_url,
          date: new Date()
        }
      }
      meal && this.props.setFormDataForEdit(meal)
    } else {
    this.props.meal && this.props.setFormDataForEdit(this.props.meal)
    }
  }

  componentDidUpdate(prevProps) {
    this.props.meal && !prevProps.meal && this.props.setFormDataForEdit(this.props.meal)
  }

  componentWillUnmount() {
    this.props.resetMealForm() 
  }

  handleSubmit = (event, formData ) => {
     const { updateMeal, createMeal, meal, userId, listId } = this.props
     let mealId = !this.props.recipe ? meal.id : uuid()
     console.log(this.props)
    event.preventDefault()
    if(this.props.pulledRecipe === true) {
      createMeal({
        ...formData, 
        mealId: mealId, 
        userId, 
        listId: listId
      })
    } else {
       updateMeal({
        ...formData,
        mealId: mealId,  
        userId
        })
    }     
  }  

  render() {
    const { deleteMeal, meal } = this.props
    const mealId = meal ? meal.id : null
    return (
      <div>
        <>
          <MealForm editMode recipe={this.props.recipe} handleSubmit={this.handleSubmit} />
          <br/>
          <button className="negative ui button" onClick={() => deleteMeal(mealId)}>Delete this meal</button>
        </>
      </div>
    );
    }
  }

  const mapStateToProps = state => {
    const userId =  state.currentUser ? state.currentUser.currentUser.data.id : ""
    return {
      userId
    }
  }

export default connect(mapStateToProps, { updateMeal, setFormDataForEdit, resetMealForm, deleteMeal, createMeal })(EditMealFormWrapper);
