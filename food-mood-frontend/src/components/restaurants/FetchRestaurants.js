import React from 'react'; 
import SearchBar from './SearchBar';
import { requestOptions, url } from '../config.js'
import yelp from '../../apis/yelp';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';
// import { location } from '../../actions/location';

class FetchRestaurants extends React.Component{
  constructor() {
    super()
 
    this.state = {
      restaurants: [], 
    }
  }
  
  //request are looking near the user

  // fetchYelpApi = (term) => {
  //   fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${this.props.location.location.latitude}&longitude=${this.props.location.location.longitude}`, requestOptions)
  //   .then(response => response.json())
  //   .then(result => {
  //     this.setState({
  //       restaurants: result.businesses
  //     })
  //   })
  //   .catch(error => console.log('error', error));
  // }

  componentDidUpdate(prevProps) {
    // this.fetchYelpApi()
    console.log(this.props.location.location)
  }
 
  componentDidMount() {
    // console.log(this.props)
    // this.fetchYelpApi();
    // this.props.location()
  }


  render() {
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
    restaurants: state.restaurants, 
    location: state.location
  }
}

export default connect(mapStateToProps)(FetchRestaurants);