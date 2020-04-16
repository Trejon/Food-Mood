const INITIAL_STATE = {
  lists: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_LIST': 
      let list = { name: action.name, description: action.description };
        return {
          ...state, 
          lists: [...state.lists, list]
        }

      case 'DELETE_LIST': 
        let lists = state.lists.filter(list => list.id !== action.id);
          return {
            ...state, lists
          }

      case 'EDIT_LIST': 
       list = { name: action.name, description: action.description };
          return {
            ...state, list
          }

      default: 
          return state;
  }
}