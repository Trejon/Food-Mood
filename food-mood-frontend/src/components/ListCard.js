// import React from 'react'; 
// import { Link } from 'react-router-dom'


// const ListCard = ({ list }) => {
    
//  const getRest = () => {
//   if (list) {
//       const listRestaurants = list.attributes.restaurants.map(restaurant => <li key={restaurant.id}><h1>{restaurant.name}</h1> Website:{restaurant.url} Rating:{restaurant.rating} Phone Number: {restaurant.display_phone} <img src={restaurant.image_url}/></li>)
//     } 
//   }

//   return(
//     list ?  
//     <div className="ui card">
//       <div className="content">
//       <div className="header">List Of</div>
//         <h2>{list.attributes.name}</h2>
//         <p>{list.attributes.description}</p>
   
//         <Link to={`/lists/${list.id}/edit`}>Edit this list</Link>
//       </div>
      
//     </div> : 
//     <p>This is the list card with no list!</p>
//   )
// }

// export default ListCard;


import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ListCard extends Component {


  render() {
    const { list } = this.props
    const listRestaurants = list ? list.attributes.restaurants.map(restaurant => <li key={restaurant.id}><h1>{restaurant.name}</h1> Website:{restaurant.url} Rating:{restaurant.rating} Phone Number: {restaurant.display_phone} <img src={restaurant.image_url}/></li>) : null

    return (
      this.props.list ?  
            <div>
              <h2>{list.attributes.name}</h2>
              <p>{list.attributes.description}</p>
              <div>
              <h1>RESTAURANTS ON THIS LIST:</h1>
                {listRestaurants}
                </div>
              <Link to={`/lists/${list.id}/edit`}>Edit this list</Link>
          </div> : 
          <p>This is the list card with no list!</p>
    );
  }
}

export default ListCard;


