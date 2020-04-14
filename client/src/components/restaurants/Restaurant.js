import React from 'react'; 

const Restaurant = (props) => {
  console.log(props)

  let restaurants = props.restaurants.map(restaurant => <li key={restaurant.id}><h1>{restaurant.name}</h1> Website:{restaurant.url} Rating:{restaurant.rating} Phone Number: {restaurant.display_phone} <img src={restaurant.image_url}/> </li>);

  return(
    <div>
      Restaurant
      {restaurants}
    </div>

  )
}

export default Restaurant;