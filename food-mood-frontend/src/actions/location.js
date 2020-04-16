import { GET_COORDS } from './types';

export const getCoords = location => {
  return {
    type: GET_COORDS, 
    location
  }
} 

// asynchronous requests 
const getLocation = (lat, long) => {
  return window.navigator.geolocation.getCurrentPosition(
   position => this.getLatAndLong(position.coords.latitude, position.coords.longitude),
   err => this.setState({errorMessage: err.message})
 );
}



export const location = (lat, long) => {
  return dispatch => {
    return
     this.getLocation(lat, long)
   } 
  }