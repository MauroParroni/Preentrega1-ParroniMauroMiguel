import React from "react";
import "./item.css" ;
import ItemCountComponent from "../itemCountComponent/itemCountComponent";

function Item (props) {
    const {id, nombre, precio, stock, categoria, imagen,  info, requisitos} = props;
    return (
        <div className="item">
        <img src ={imagen}  alt="asd"/>
        <h1>{nombre}</h1>
        <p>$ {precio} </p>
        <button>Ver Producto</button>
        </div>
    )
}
export default Item;