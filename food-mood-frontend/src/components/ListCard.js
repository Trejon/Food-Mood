import React from 'react'; 

const ListCard = ({ list }) => {
  return(
    <p>{list.attributes.name}</p>
  )
}

export default ListCard;