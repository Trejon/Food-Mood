import React from 'react'; 
import { Link } from 'react-router-dom'

const ListCard = ({ list }) => {
  return(
    list ?  
    <>
      <h2>{list.attributes.name}</h2>
      <p>{list.attributes.description}</p>
      <Link to={`/lists/${list.id}/edit`}>Edit this list</Link>
    </> : 
    <p>This is the list card with no list!</p>
  )
}

export default ListCard;