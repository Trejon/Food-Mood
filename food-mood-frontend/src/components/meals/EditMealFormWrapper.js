import React from 'react';
import { updateMeal, deleteMeal } from '../../actions/myMeals'; 
import {  setFormDataForEdit, resetMealForm } from '../../actions/mealForm';
import { connect } from 'react-redux';
import MealForm from './MealForm';
import { render } from 'react-dom';

class EditMealFormWrapper extends React.Component {
  componentDidMount() { 
    this.props.meal && this.props.setFormDataForEdit(this.props.meal)
  }

  componentDidUpdate(prevProps) {
    this.props.meal && !prevProps.meal && this.props.setFormDataForEdit(this.props.meal)
  }

  componentWillUnmount() {
    this.props.resetMealForm()
  }

  handleSubmit = (event, formData, userId ) => {
     const { updateMeal, meal } = this.props
    event.preventDefault()
    updateMeal({
      ...formData,
      mealId: meal.id,  
      userId
    })
  }  

  render() {
    const { deleteMeal, meal } = this.props
    const mealId = meal ? meal.id : null
    return (
      <div>
        <>
          <MealForm editMode handleSubmit={this.handleSubmit} />
          <br/>
          <button className="negative ui button" onClick={() => deleteMeal(mealId)}>Delete this meal</button>
        </>
      </div>
    );
    }
  }

export default connect(null, { updateMeal, setFormDataForEdit, resetMealForm, deleteMeal })(EditMealFormWrapper);
