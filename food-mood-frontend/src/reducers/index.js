import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 
import locationReducer from './locationReducer';
import listReducer from './listReducer';
import currentUser from './currentUser';
import loginForm from './loginForm';

export default combineReducers({
  auth: authReducer, 
  location: locationReducer, 
  lists: listReducer, 
  currentUser, 
  loginForm
});