import React from 'react'
import './itemCard.scss';

const ItemCard = ( { item } ) => {
  
  return (
    // o Imagen
    //Marca
    //Modelo
    //Precio

    <div className='container'>
      <img src={item.imgUrl} alt={item.brand} />
      <div>{item.brand}</div>
      <div>{item.model}</div>
      <div>{item.price}</div>
    </div>
  );
}

export default ItemCard