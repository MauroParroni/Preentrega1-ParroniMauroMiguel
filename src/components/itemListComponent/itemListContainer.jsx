import React, { useEffect, useState } from 'react';
import "./itemList.css"
import ItemComponent from './itemComponent/item';
import getData, { getCategoryData } from '../../services/asyncMock';
import { useParams } from 'react-router-dom';
import ItemList from './itemList';


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
    <ItemList videojuegos={videojuegos} />    
  );
};
export default ItemListContainer;
