import React, { useEffect, useState } from 'react';
import "./itemList.css"
import ItemComponent from './itemComponent/item';
import getData, { getCategoryData } from '../../services/asyncMock';
import ItemDetailComponent from '../itemDetailContainer/itemDetailContainer';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ prop }) => {
  const [videojuegos, setVideojuegos] = useState([]);
  const {categoryId}= useParams();
  async function getProductList(){
   let resp = categoryId? await getCategoryData(categoryId) : await getData();
     setVideojuegos(resp);
  }
  useEffect(() =>{
    getProductList();
  },[categoryId])
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
