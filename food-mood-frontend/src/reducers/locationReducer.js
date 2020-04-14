import { GET_COORDS } from '../actions/types';

const INITIAL_STATE = {
  lat: null, 
  long: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_COORDS: 
      return {...state, lat: true, long: action.payload }
    default: 
      return state;
  }
};