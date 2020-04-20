import React from 'react';
import { createMeal } from '../../actions/myMeals'; 
import { connect } from 'react-redux';
import MealForm from './MealForm';

const NewMealFormWrapper = ({ createMeal, listId, userId }) => {

  const handleSubmit = (event, formData) => {
    event.preventDefault()
    createMeal({
      ...formData,  
      userId, 
      listId
    })
  }


  return (
    <div>
      <MealForm listId={listId} handleSubmit={handleSubmit} />
    </div>
  );
}

const mapStateToProps = state => {
  const userId =  state.currentUser ? state.currentUser.currentUser.data.id : ""
  return {
    userId
  }
}

export default connect(mapStateToProps, { createMeal })(NewMealFormWrapper);
