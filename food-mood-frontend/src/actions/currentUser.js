import { SET_CURRENT_USER } from './types';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user: user
  }
}

 


// asynchronous action creators
export const login = credentials => {
  console.log('credentials are:', credentials)
  return dispatch => {
    return fetch("http://localhost:3001/login", {
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
      }
    })
    .catch(console.log)
  }
}
