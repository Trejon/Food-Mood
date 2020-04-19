import React from 'react'; 
import RecipeSearch from './RecipeSearch';
import { connect } from 'react-redux';
import Recipe from './Recipe';

class FetchRecipes extends React.Component{
  constructor() {
    super()
 
    this.state = {
      recipes: [], 
    }
  }

  // async getResults() {
  //   try {
  //     const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
  //     this.result = res.data.recipes;
  //     // console.log(this.result);
  //   } catch(error) {
  //       alert(error);
  //   }
  // }

    fetchRecipes = (query) => {
      fetch(`https://forkify-api.herokuapp.com/api/search?&q=${query}`)
        .then(res => res.json())
        .then(result => this.setState({
          recipes: result.recipes
        }))
    }

    componentDidUpdate() {
      console.log(this.state)
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
    if(!this.state.recipes) {
      return(
        <div>
          <h5>Search Recipes</h5>
          <RecipeSearch search={this.fetchRecipes} />
        </div>
      )
    } 
    return(
      <div>
        <h5>Search Recipes</h5>
        <RecipeSearch search={this.fetchRecipes} />
        <Recipe recipes={this.state.recipes} />
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