import React from 'react';
import { requestOptions, url } from '../config.js'

class SearchBar extends React.Component {

  state = {
    term: '',
    restaurants: []
  };

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.term)
    this.fetchYelpApi(this.state.term);
  };

  fetchYelpApi = (term) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${this.props.lat}&longitude=${this.props.long}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({
        restaurants: result.businesses
      })
    })
    .catch(error => console.log('error', error));
  }

  componentDidUpdate() {
    // console.log(this.state)
  }


  // componentDidMount() {
  //   this.fetchYelpApi(this.state.term)
  // }

  render() {
    // console.log(this.props)
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Enter Restaurant Name</label>
            <input
            type="text" value={this.state.term}
            onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
