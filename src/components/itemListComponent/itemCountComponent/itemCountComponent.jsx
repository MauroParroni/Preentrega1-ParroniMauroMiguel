import React, { useState } from "react";
import "./itemCountComponent.css";

function ItemCountComponent({props}) {
  const [clickCount, setClickCount] = useState(0);

  function handleClickAdd() {
    if (clickCount == props) {
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
      <h2 className="count-text">{clickCount}</h2>
      <button className="item-count-button" onClick={handleClickAdd}>
        +
      </button>
      <button className="item-count-button add-to-cart-button">
        <h4>Añadir al carrito</h4>
      </button>
    </div>
  );
}

export default ItemCountComponent;