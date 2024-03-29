const locationReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_USER_LOCATION':
      return {
        ...state,
        location: action.location,
      };
    default:
      return state;
  }
};

export default locationReducer;
