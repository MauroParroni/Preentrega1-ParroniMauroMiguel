import { TailSpin } from "react-loader-spinner";
import { useState, useEffect, useContext } from "react";
import {getProductData} from "../../services/firebase";
import "./itemDetail.css";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
function ItemDetailComponent() {
  const {addToCart} = useContext(cartContext)
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [inCart, setInCart] = useState(false);
  const {id}= useParams();

  async function requestProduct() {
    const resp = await getProductData(id);
    setProduct(resp);
    setIsLoading(false);
  }
  function handleAddToCart(count){
    addToCart(product,count);
    MySwal.fire(`Agregaste ${count} de ${product.nombre} al carrito`)
    setInCart(true)
  }
  useEffect(() => {
    requestProduct();
  }, []);
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
    <ItemDetail addToCart= {handleAddToCart} product= {product} addedToCart ={inCart}/>
  );
}
export default ItemDetailComponent;
