import React from 'react'; 
import SearchBar from './SearchBar';
import { requestOptions, url } from '../config.js'
import yelp from '../../apis/yelp';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';

class FetchRestaurants extends React.Component{
  constructor() {
    super()

    this.state = {
      restaurants: []
    }
  }

  fetchYelpApi = (term) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=37.786882&longitude=-122.399972`, requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({
        restaurants: result.businesses
      })
    })
    .catch(error => console.log('error', error));
  }

  componentDidUpdate() {
    this.render()
  }

  componentDidMount() {
    this.fetchYelpApi();
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
        <SearchBar search={this.fetchYelpApi} />
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