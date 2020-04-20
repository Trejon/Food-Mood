let initalState = {
  name: "",
  kind: "", 
  meal_type: "",  
  description: "", 
  url: "", 
  meal_date: ""
}

export default (state=initalState, action) => {
  switch(action.type) {
    case "UPDATE_MEAL_FORM":
      const returnVal = {
        ...state, 
        [action.formData.name]: action.formData.value
      }
      return returnVal
    case "RESET_MEAL_FORM":
      return initalState
    case "SET_FORM_DATA_FOR_EDIT": 
      return action.mealFormData
    default: 
      return state
  }
}