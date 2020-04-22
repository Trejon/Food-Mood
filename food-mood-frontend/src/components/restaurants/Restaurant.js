import React from 'react'; 
import history from '../../history';

const Restaurant = (props) => {

  let restaurants = props.restaurants.map(restaurant => 
  <div className="column" key={restaurant.id}> 
    <div className="ui fluid card" style={{height: '800px'}}>
      <div className="image">
        <img style={{height: '400px'}} src={restaurant.image_url} alt={restaurant.name} />
      </div>
      <div className="content">
        <a className="header" href={restaurant.url} target="_blank" rel="noopener noreferrer"><h3>{restaurant.name}</h3></a>
        <div className="description">
          <h5>Phone Number: {restaurant.display_phone}</h5>
          <h5>Address: {restaurant.location.address1} {restaurant.location.city} {restaurant.location.state} {restaurant.location.zip_code}</h5>
        </div> 
        <div className="extra">
          <h5>Rating: {restaurant.rating} ({restaurant.review_count} reviews)</h5>
        </div>
      </div>

      <button className="ui primary button" onClick={() => history.push('/lists')}>Add To List</button>

      {/* <div className="ui selection dropdown">
            <input type="hidden" name="gender" />
            <i className="dropdown icon"></i>
            <div className="default text primary">Choose a list</div>
            <div className="menu">
              <div className="item" data-value="1">List 1</div>
              <div className="item" data-value="0">List 2</div>
            </div>
          </div> */}

          </div> 
  </div>);
  
  return(
    <div className="ui four column grid">
      {restaurants}
    </div>
  )
}

export default Restaurant;