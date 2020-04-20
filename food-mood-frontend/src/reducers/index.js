import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 
import locationReducer from './locationReducer';
import listReducer from './listReducer';
import currentUser from './currentUser';
import loginForm from './loginForm';
import myLists from './myLists';
import myMeals from './myMeals';
import ListForm from './listForm';

export default combineReducers({
  // auth: authReducer, 
  location: locationReducer, 
  // lists: listReducer, 
  currentUser, 
  loginForm, 
  myLists, 
  myMeals,
  ListForm, 
});