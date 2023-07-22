import { useState, useEffect } from "react";
import {getProductData} from "../../services/asyncMock";
import "./itemDetail.css";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

function ItemDetailComponent() {
  const [product, setProduct] = useState({});
  const {id}= useParams();

  async function requestProduct() {
    const resp = await getProductData(id);
    setProduct(resp);
  }
  useEffect(() => {
    requestProduct();
  }, []);
  return (
    <ItemDetail product= {product} />
  );
}
export default ItemDetailComponent;
