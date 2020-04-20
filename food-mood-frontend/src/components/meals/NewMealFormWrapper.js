import React from 'react';
import { createMeal } from '../../actions/myMeals'; 
import { connect } from 'react-redux';
import MealForm from './MealForm';

const NewMealFormWrapper = ({ createMeal }) => {

  const handleSubmit = (event, formData, userId ) => {
    event.preventDefault()
    createMeal({
      ...formData,  
      userId
    })
  }

  return (
    <div>
      <MealForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect(null, { createMeal })(NewMealFormWrapper);
