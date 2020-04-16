import React from 'react'; 
import SearchBar from './SearchBar';
import { requestOptions, url } from '../config.js'
import yelp from '../../apis/yelp';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';
import { location } from '../../actions/location';

class FetchRestaurants extends React.Component{
  constructor() {
    super()
 
    this.state = {
      restaurants: [], 
      lat: null, 
      long: null
    }
  }

  getLatAndLong = (lat, long) => {
    return this.setState((currentState) => {
      return {
        lat, long
      }
    })
  }

getGeoLocation = () => {
     window.navigator.geolocation.getCurrentPosition(
      position => this.getLatAndLong(position.coords.latitude, position.coords.longitude),
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
    // console.log(this.props)
    // this.fetchYelpApi();
    // this.getGeoLocation();
    this.props.location()
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

export default connect(mapStateToProps, { location })(FetchRestaurants);