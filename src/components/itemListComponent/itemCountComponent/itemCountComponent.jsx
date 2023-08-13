import React, { useState } from "react";
import "./itemCountComponent.css";
function ItemCountComponent({stock,onAddToCart }) {
  const [clickCount, setClickCount] = useState(1);

  function handleClickAdd() {
    if (clickCount === stock) {
    }else{
   setClickCount(clickCount + 1);
    }
  }

  function handleClickSub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }
 

  return (
    <div className="item-count-container">
      <button className="item-count-button" onClick={handleClickSub}>
        -
      </button>
      <h3 className="count-text">{clickCount}</h3>
      <button className="item-count-button" onClick={handleClickAdd}>
        +
      </button>
      <button className="item-count-button add-to-cart-button" onClick={ (evt) =>{onAddToCart(clickCount, evt)} }>
        <h4>Añadir al carrito</h4>
      </button>
    </div>
  );
}

export default ItemCountComponent;