
import React, { useContext } from 'react';
import "./carrito.css";
import logoCarrito from "./descarga.png";
import { cartContext } from '../../context/cartContext';
import { getTotalItemsInCart } from '../../context/cartContext';
const Carro = () => {
    const context = useContext(cartContext);
    const { get } = context;
    return (
        <div>
            <img src={logoCarrito} width="55" height="30" className="d-inline-block align-top" alt="Carrito" />
            <small className="xd">{context.getTotalItemsInCart()}</small>
        </div>
    );
}

export default Carro;