import React from 'react'; 
import GoogleMapReact from 'google-map-react'; 
import { mapsKey } from '../components/config';
import { connect } from 'react-redux';
import { requestOptions, url } from '../components/config'


class GoogleMaps extends React. Component{

  constructor() {
    super()
    
    this.state = {
      mapRef: null, 
      zoom: 10, 
      bounds: null
    }
  }
  
  handleApiLoaded = (map, maps) => {
    const myPosition = {lat: this.props.location.location.latitude, lng: this.props.location.location.longitude}
    let marker = new maps.Marker({
      position: myPosition,
      map,
      title: 'Here I am!'
    });
  }

  render() {
    const lat = this.props.location ? this.props.location.location.latitude : null
    const lng = this.props.location ? this.props.location.location.longitude : null

  const restLocations = this.props.restaurants.map(res => { return {lat: res.coordinates.latitude, lng: res.coordinates.longitude}})


  const Marker = props => {
    return (
    <div>
      <button className="restaurant-marker">
        <img style={{height: '50px', width: '50px'}} src="/img/pin.png" alt="Food-Mood" />
        {props.name}
      </button>
    </div>
    )
  }
  
    if (this.props.location) {
      return(
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact 
            bootstrapURLKeys={{ key: mapsKey}}
            defaultCenter={{lat, lng}}
            defaultZoom={10} 
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
            >
            { this.props.restaurants.map(restaurant => (
            <Marker key={restaurant.id} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} name={restaurant.name} >
              <button className="restaurant-marker">
                 <img src="/img/pin.png" alt="Food-Mood" />
              </button>
          </Marker> 
                 ))}
          </GoogleMapReact>

        </div>
      )
    }
    return(<div>Loading your location</div>)
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  }
}

export default connect(mapStateToProps)(GoogleMaps);
