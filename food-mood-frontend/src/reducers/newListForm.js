let initalState = {
  name: "", 
  description: ""
}

export default (state=initalState, action) => {
  switch(action.type) {
    case "UPDATE_NEW_LIST_FORM":
      const returnVal = {
        ...state, 
        [action.formData.name]: action.formData.value
      }
      return returnVal
    case "RESET_LIST_FORM":
      return initalState
    default: 
      return state
  }
}