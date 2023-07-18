import React, { useEffect, useState } from 'react';
import "./itemList.css"
import ItemCount from './itemCountComponent/itemCountComponent';
import ItemComponent from './itemComponent/item';
import getData from '../../services/asyncMock';


const ItemListContainer = ({ prop }) => {
  const [videojuegos, setVideojuegos] = useState([]);
  async function getProductList(){
     const resp = await getData();
     setVideojuegos(resp);
  }
  useEffect(() =>{
    getProductList();
  },[])
  return (
    <div className='estiloContenedor'>
      <h2 className='greetingStyles'>{prop}</h2>
      <div>
      {videojuegos.map((juego) => <ItemComponent key= {juego.id}{...juego}/>)}
      </div>

    </div>
   
  );
};
export default ItemListContainer;