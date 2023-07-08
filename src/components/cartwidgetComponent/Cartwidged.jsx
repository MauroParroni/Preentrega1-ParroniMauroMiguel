import "./carrito.css";
import logoCarrito from "./descarga.png";
const carrito = logoCarrito;

export const carro = () => {
    return (
        <div>
        <img src={carrito}  width="55"
        height="30"
        className="d-inline-block align-top"
        alt="Carrito" />
        <small className="xd">1</small>
        </div>
    );
}
export default carro;