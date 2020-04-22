import React from 'react'; 
import { updateMealForm } from '../../actions/mealForm';
import { createMeal } from '../../actions/myMeals';
import { connect } from 'react-redux';

const MealForm = ({ formData, updateMealForm, meal, listId, handleSubmit, userId, editMode, recipe }) => {
  const { name, kind, meal_type, description, url, meal_date } = formData

  const handleChange = event => {
    const { name, value} = event.target
    updateMealForm(name, value)
  } 
  
  return (
    <form className="ui form" onSubmit={event => handleSubmit(event, formData)}> 
      <input 
        name="name"
        onChange={handleChange}
        value={name}
        placeholder="Name"
      /><br /><br/>
      <input 
        name="kind"
        onChange={handleChange}
        value={kind}
        placeholder="Restaurant or Recipe?"
      /><br /><br/>
      <input 
        name="meal_type"
        onChange={handleChange}
        value={meal_type}
        placeholder="Breakfast, Lunch, Dinner?"
      /><br /><br/>
      <input 
        name="description"
        onChange={handleChange}
        value={description}
        placeholder="Description"
      /><br /><br/>
      <input 
        name="url"
        onChange={handleChange}
        value={url}
        placeholder="Link to Recipe or Restaurant?"
      /><br /><br/>
      <input type="date"
        name="meal_date"
        onChange={handleChange}
        value={meal_date}
        placeholder="Date"
      /><br /><br/>
      <button className="ui primary button" type="submit">{editMode ? "Update Meal" : "Create Meal"}</button>
    </form>
  )
}

const mapStateToProps = state => {
  const userId =  state.currentUser ? state.currentUser.currentUser.data.id : ""
  return {
    formData: state.MealForm, 
    userId
  }
}

export default connect(mapStateToProps, { updateMealForm })(MealForm);