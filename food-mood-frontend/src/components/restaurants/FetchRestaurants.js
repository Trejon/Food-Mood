import React from 'react'; 
import SearchBar from './SearchBar';
import { requestOptions, url } from '../config.js.js'
import yelp from '../../apis/yelp';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';

class FetchRestaurants extends React.Component{
  constructor() {
    super()

    this.state = {
      restaurants: [], 
      lat: null, 
      long: null
    }
  }

getGeoLocation = () => {
     window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
      err => this.setState({errorMessage: err.message})
    );
  }
  
  //request are looking near the user

  fetchYelpApi = (term) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${this.state.lat}&longitude=${this.state.long}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({
        restaurants: result.businesses
      })
    })
    .catch(error => console.log('error', error));
  }

  // componentDidUpdate() {
  //   this.fetchYelpApi()
  // }

  componentDidMount() {
    // this.fetchYelpApi();
    this.getGeoLocation();
  }


  render() {
    this.getGeoLocation();
    if(!this.state.restaurants) {
      return(
        <div>
          FetchRestaurants
          <SearchBar search={this.fetchYelpApi} />
        </div>
      )
    } 
    return(
      <div>
        <Restaurant restaurants={this.state.restaurants} />
        <SearchBar search={this.fetchYelpApi} lat={this.state.lat} long={this.state.long} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(FetchRestaurants);