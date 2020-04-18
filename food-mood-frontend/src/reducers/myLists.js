export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_LISTS":
      return action.lists
    case "ADD_LIST": 
      return state.lists.concat(action.lists)
    case "CLEAR_LISTS":
      return []
    default: 
      return state
  }
}  