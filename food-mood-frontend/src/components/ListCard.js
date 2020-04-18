import React from 'react'; 

const ListCard = ({ list }) => {
  return(
    <>
      <h3>{list.attributes.name}</h3>
    </>
  )
}

export default ListCard;