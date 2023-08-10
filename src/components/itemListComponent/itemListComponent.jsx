import { TailSpin } from 'react-loader-spinner'
import React, { useEffect, useState } from 'react';
import "./itemList.css"
import { getData,getCategoryData} from '../../services/firebase';
import { useParams } from 'react-router-dom';
import ItemList from './itemList';


const ItemListContainer = ({ prop }) => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {categoryId}= useParams();
  async function getProductList(){
   let resp = categoryId? await getCategoryData(categoryId) : await getData();
     setVideojuegos(resp);
     setIsLoading (false)
  }
  useEffect(() =>{
    setIsLoading(true);
    getProductList();
  },[categoryId])
  if (isLoading) return<div className="center-container">
  <TailSpin
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
</div>
  return (
    <ItemList videojuegos={videojuegos} />    
  );
};
export default ItemListContainer;
