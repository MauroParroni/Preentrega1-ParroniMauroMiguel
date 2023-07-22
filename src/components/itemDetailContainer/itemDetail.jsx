import { Image } from "react-bootstrap";
import ItemCountComponent from "../itemListComponent/itemCountComponent/itemCountComponent";
function itemDetail({product}){
    const requisitosExisten =
    product?.requisitos && Array.isArray(product.requisitos);
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
        <ItemCountComponent stock={product.stock} />
        <h3>Requisitos:</h3>
        {requisitosExisten ? (
          <ul>
            {product.requisitos.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron requisitos para este producto.</p>
        )}
      </div>
    </div>

    )}
    export default itemDetail;