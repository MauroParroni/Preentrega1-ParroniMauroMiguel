import { Image} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ItemCountComponent from "../itemListComponent/itemCountComponent/itemCountComponent";
import Button from 'react-bootstrap/Button';
function itemDetail({product, addToCart, addedToCart}){
    return(
<div className="item-detail">
      <h2>{product.nombre}</h2>
      <div className="image-container">
        <Image
          src={product.imagen}
          alt={product.nombre}
          fluid
          thumbnail
          className="imageProduct"
        />
      </div>
      <div className="info-container">
        <p>{product.info}</p>
        <h3>Categoría: {product.categoria}</h3>
        <h3>Precio: ${product.precio}</h3>
        {addedToCart ? (
           <div>
           <LinkContainer to="/cart">
           <Button  variant="info" className="buttons">Ir Al Carrito</Button>
         </LinkContainer>
         <LinkContainer to="/">
         <Button  variant="success" className="buttons">Volver Al Inicio</Button>
       </LinkContainer>
       </div>
        ) : (
          <ItemCountComponent onAddToCart={addToCart} stock={product.stock} />
        )}
        <h3>Requisitos:</h3>
          <ul>
            {product.requisitos.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>       
      </div>
    </div>

    )}
    export default itemDetail;