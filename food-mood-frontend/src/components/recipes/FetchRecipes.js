import React from 'react'; 
import Search from './RecipeSearch';
import { connect } from 'react-redux';
import Recipe from './Recipe';

class FetchRecipes extends React.Component{
  constructor() {
    super()
 
    this.state = {
      recipes: [], 
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

  // componentDidUpdate(prevProps) {
  //   // !prevProps.location && console.log(this.props)
  //   if (this.props.location !== prevProps.location) {
  //     this.fetchYelpApi()
  //   }
  //   // this.fetchYelpApi()
  // }

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
          <h5>Search Recipes</h5>
          {/* <SearchBar  /> */}
        </div>
      )
    } 
    return(
      <div>
        <h5>Search Recipes</h5>
        {/* <SearchBar  /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  }
}

export default connect(mapStateToProps)(FetchRecipes);