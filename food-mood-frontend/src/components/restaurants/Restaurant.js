import React from 'react'; 

const Restaurant = (props) => {

  let restaurants = props.restaurants.map(restaurant => 
  <div className="column"> 
    <div className="ui fluid card">
      <div className="image">
        <img style={{height: '500px'}} src={restaurant.image_url} alt={restaurant.name} />
      </div>
      <div className="content">
        <a className="header" href={restaurant.url} target="_blank" rel="noopener noreferrer"><h3>{restaurant.name}</h3></a>
        <div className="description">
          <h5>Phone Number: {restaurant.display_phone}</h5>
        </div> 
        <div className="extra">
          <h5>Rating: 
          <div className="ui star rating" data-rating={restaurant.rating}><h5>{restaurant.rating}</h5></div></h5>
        </div>
      </div>
    </div>
  </div>);
  
  return(
    <div className="ui four column grid">
      {restaurants}
    </div>
  )
}

export default Restaurant;