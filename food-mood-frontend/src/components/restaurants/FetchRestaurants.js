import React from 'react'; 
import SearchBar from './SearchBar';
import { requestOptions, url } from '../config.js'
import yelp from '../../apis/yelp';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';
import GoogleMaps from '../../apis/GoogleMaps';
// import { location } from '../../actions/location';


// this.props.location.location


class FetchRestaurants extends React.Component{
  constructor() {
    super()
 
    this.state = {
      restaurants: [], 
    }
  }
  
  //request are looking near the user

  fetchYelpApi = (term) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${this.props.location.location.latitude}&longitude=${this.props.location.location.longitude}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({
        restaurants: result.businesses
      })
    })
    .catch(error => console.log('error', error));
  }

  componentDidUpdate(prevProps) {
    // !prevProps.location && console.log(this.props)
    if (this.props.location !== prevProps.location) {
      this.fetchYelpApi()
    }
    // this.fetchYelpApi()
  }

  // componentDidUpdate(prevProps) {
  //   this.props.list && !prevProps.list && this.props.setFormDataForEdit(this.props.list)
  // }
 
  componentDidMount() {
    // console.log(this.props)
    // this.fetchYelpApi();
    // this.props.location()
  }


  render() {
    if(!this.state.restaurants) {
      return(
        <div>
          <h5>Search Restaurants Near You</h5>
          <SearchBar search={this.fetchYelpApi} />
          <GoogleMaps restaurants={this.state.restaurants} />
        </div>
      )
    } 
    return(
      <div>
        <h5>Search Restaurants Near You</h5>
        <SearchBar search={this.fetchYelpApi} />
        <Restaurant restaurants={this.state.restaurants} />
        <GoogleMaps restaurants={this.state.restaurants} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // restaurants: state.restaurants, 
    location: state.location
  }
}

export default connect(mapStateToProps)(FetchRestaurants);