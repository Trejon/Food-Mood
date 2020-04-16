export const fetchUser = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER' })
    fetch('http://localhost:3001/api/v1/login')
      .then(response => response.json())
      .then(responseJSON => {
        dispatch({ type: 'LOAD_USER', user: responseJSON.user })
      })
  }
}