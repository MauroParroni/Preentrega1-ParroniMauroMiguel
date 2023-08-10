import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../services/firebase";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Table } from "react-bootstrap";
import "./orderConfirm.css"

function OrderConfirm() {
  const [orderData, setOrderdata] = useState(null);
  const { id } = useParams();

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
          </div>
          <LinkContainer to="/">
            <Button variant="success" className="buttons">
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