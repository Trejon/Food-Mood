import React from 'react';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';
import GoogleMaps from '../../apis/GoogleMaps';
import { Header, Icon } from 'semantic-ui-react';
import history from '../../history';
class FetchRestaurants extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurants: [],
    };
  }

  // fetchYelpApi = (term) => {
  //   fetch(
  //     `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${this.props.location.location.latitude}&longitude=${this.props.location.location.longitude}`,
  //     requestOptions
  //   )
  //     .then((response) => console.log(JSON.parse(response)))
  //     .then((response) => response.json())
  //     .then((result) => {
  //       this.setState({
  //         restaurants: result.businesses,
  //       });
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  fetchYelpApi = (term) => {
    const data = {
      term: term,
      latitude: this.props.location.location.latitude,
      longitude: this.props.location.location.longitude,
    };
    fetch('http://localhost:3001/api/v1/search', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(
        (result) =>
          this.setState({
            restaurants: result.businesses,
          })
        // .catch((error) => console.log("error", error))
      );
  };

  // componentDidUpdate(prevProps) {
  //   if (this.props.location !== prevProps.location) {
  //     this.fetchYelpApi();
  //   }
  // }

  render() {
    if (!this.props.currentUser) {
      return (
        <div className="redirectIcon" onClick={() => history.push('/')}>
          <Header as="h2" icon textAlign="center">
            <Icon name="users" />
            <Header.Content>
              <h3>Please log in or sign up!</h3>
            </Header.Content>
          </Header>
        </div>
      );
    }

    if (!this.state.restaurants) {
      return (
        <div>
          <h5> Search Restaurants Near You </h5>{' '}
          <SearchBar search={this.fetchYelpApi} /> <br />
          <GoogleMaps restaurants={this.state.restaurants} />{' '}
        </div>
      );
    }
    return (
      <div>
        <h5> Search Restaurants Near You </h5>{' '}
        <SearchBar search={this.fetchYelpApi} />{' '}
        <Restaurant restaurants={this.state.restaurants} /> <br />
        <GoogleMaps restaurants={this.state.restaurants} />{' '}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(FetchRestaurants);
