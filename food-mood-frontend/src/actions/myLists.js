export const setMyLists = lists => {
  return {
    type: "SET_MY_LISTS",
    lists
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