import React from "react";
import "./item.css" ;
import ItemCountComponent from "../itemCountComponent/itemCountComponent";
import { Link } from "react-router-dom";

function Item (props) {
    const {id, nombre, precio, stock, categoria, imagen,  info, requisitos} = props;
    return (
        <div className="item">
        <img src ={imagen}  alt="asd"/>
        <h1>{nombre}</h1>
        <p>$ {precio} </p>
        <Link to={`/product/${id}`}>
        <button>Ver Producto</button>
        </Link>
        </div>
    )
}
export default Item;