import history from '../history';
import { resetListForm } from './listForm'

export const setMyLists = lists => {
  return {
    type: "SET_MY_LISTS",
    lists
  }
}

export const clearLists = () => {
  return {
    type: "CLEAR_LISTS", 
  }
}

export const addList = list => {
  return {
    type: "ADD_LIST", 
    list
  }
} 

export const updateListSuccess = list => {
  return {
    type: "UPDATE_LIST", 
    list
  }
} 

// Asynchronous actions

 export const getMyLists = () => {
   return dispatch =>  {
    return fetch("http://localhost:3001/api/v1/lists", {
      credentials: "include", 
      method: "GET", 
      headers: {
        "Content-Type": "application/json"
      }, 
    })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setMyLists(response.data))
      }
    })
    .catch(console.log)
  }
} 

export const createList = listData => {
  return dispatch => { 
    const sendableListData = {
        name: listData.name, 
        description: listData.description, 
        user_id: listData.userId
    }
    return fetch("http://localhost:3001/api/v1/lists", {
      credentials: 'include', 
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(sendableListData)
    })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(addList(response.data))
        dispatch(resetListForm())
        history.push(`/lists/${response.data.id}`)
        // Go somewhere else ---> list show
        // add the new list to the store 
      }
    })
    .catch(console.log)
  }
} 

export const updateList = listData => {
  return dispatch => { 
    const sendableListData = {
        name: listData.name, 
        description: listData.description
    }
    console.log(sendableListData)
    return fetch(`http://localhost:3001//api/v1/lists/${listData.listId}`, {
      credentials: 'include', 
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(sendableListData)
    })
    .then(res => res.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(updateListSuccess(response.data))
        history.push(`/lists/${response.data.id}`)
        // Go somewhere else ---> list show
        // add the new list to the store 
      }
    })
    .catch(console.log)
  }
} 