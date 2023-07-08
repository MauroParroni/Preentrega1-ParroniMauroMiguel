import React from 'react';
import "./itemList.css"

const ItemListContainer = ({ prop }) => {
  return (
    <div className='estiloContenedor'>
      <h2 className='greetingStyles'>{prop}</h2>
    </div>
  );
};

// Estilos del contenedor

export default ItemListContainer;