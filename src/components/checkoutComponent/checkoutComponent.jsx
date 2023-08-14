import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./checkout.css"
import InputForm from "./inputForm/inputForm";
import { cartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
function CheckoutComponent(){
    const [buyer, setBuyer]= useState({
        firstname:"",
        lastname:"",
        age:"",
    })
    const { cart,  } = useContext(cartContext);
    const navigate = useNavigate();
    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.precio * item.count;
        });
        return total;
    }; 
    async function handleCheckout(evt) {
        evt.preventDefault();
        const orderItems = cart.map(item => ({ ...item }));
        const orderData ={
            items : orderItems,
            buyer: buyer,
            date: new Date(),
            total:  calculateTotal()
        }
        try {
        const idOrder = await createOrder(orderData)
        MySwal.fire(`Gracias por su compra tu numero de orden es ${idOrder}`)
        navigate (`/order-confirmation/${idOrder}`)

    } catch(error){
        MySwal.fire(`No se pudo realizar la compra ${error.message}`)
    }
     } 
    function onInputChange(evt){
        evt.preventDefault();
        const value = evt.target.value;
        const field = evt.target.name;
        const newState = {...buyer};
        newState[field] = value;
        setBuyer(newState);
    }
    function resetForm(e){
        e.preventDefault();
        setBuyer({
            firstname:"",
            lastname:"",
            age:"",
        })
    }
    function onSubmit(evt){
        console.log(`Gracias por tu compra`)
    }

    return(
        <div className="container form-container">
            <h2 className="Cart">Rellena con tus datos para completar la compra</h2>
    <Form>
    <InputForm value ={buyer.name} label={"Nombre"} onChange ={onInputChange} name ={"firstname"} type ={"text"}/>
    <InputForm value ={buyer.name} label={"Apellido"} onChange ={onInputChange} name ={"lastname"} type ={"text"}/>
    <InputForm value ={buyer.name} label={"Edad"} onChange ={onInputChange} name ={"age"} type ={"number"}/>
    <Button variant="primary" type="submit" onClick={handleCheckout} disabled={!(buyer.firstname!=="" && buyer.lastname!=="" && buyer.age !== "" )}>
        Crear orden
      </Button>
      <Button variant="danger" type="submit" onClick={resetForm} style={ {margin: 10}}>
       Cancelar
      </Button>
    </Form> 
    </div>
    )
}


export default CheckoutComponent;