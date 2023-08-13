import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../services/firebase";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Table } from "react-bootstrap";
import "./orderConfirm.css"
import { cartContext } from "../context/cartContext";

function OrderConfirm() {
  const {  cart, clearCart } = useContext(cartContext);
  const [orderData, setOrderdata] = useState(null);
  const { id } = useParams();
  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
        total += item.precio * item.count;
    });
    return total;
}; 
  useEffect(() => {
    getOrder(id).then((order) => {
      console.log(order);
      setOrderdata(order);
    });
  }, []);

  return ( 
    <div className="order-confirm-container">
      <h1 className="order-confirm-header">GRACIAS POR TU COMPRA</h1>
      {orderData ? (
        <div>
          <div>
            <p className="order-confirm-products">
              Tus productos comprados:
            </p>
            <Table striped bordered hover variant="dark" className="order-confirm-table container">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {orderData.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nombre}</td>
                    <td>{item.count} unidades</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h3 style={{color:"white"}}>Total: {calculateTotal()}$</h3>
          </div>
          <LinkContainer to="/">
            <Button variant="success" className="buttons" onClick={clearCart}>
              Ir a la página principal
            </Button>
          </LinkContainer>
        </div>
      ) : (
        <p>cargando</p>
      )}
    </div>
  
  );
  
}

export default OrderConfirm;