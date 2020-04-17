import { SET_CURRENT_USER } from './types';
import { resetLoginForm } from './loginForm';
import { getMyLists } from './myLists';
import history from '../history';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

 export const clearCurrentUser = () => {
  return  {
    type: "CLEAR_CURRENT_USER"
  }
 }


// asynchronous action creators
export const login = credentials => {
  console.log('credentials are:', credentials)
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
       dispatch(setCurrentUser(user))
       dispatch(getMyLists())
       history.push('/')
       dispatch(resetLoginForm())
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: 'include', 
      method: 'DELETE'
    })
  }
}

export const signup = credentials => {
  console.log('credentials are:', credentials)
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
       dispatch(setCurrentUser(user))
       dispatch(getMyLists())
       history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }, 
    })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
       dispatch(setCurrentUser(response))
       dispatch(getMyLists())
      }
    })
    .catch(console.log)
  }
}
