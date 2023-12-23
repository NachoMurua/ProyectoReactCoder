import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Cart.css"

export const Cart=()=>{
    const {cart, clearCart, totalQuantity, totalPrice} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        setTotal(totalPrice())
    },[totalPrice()]);

    if (totalQuantity === 0){
        return(
            <div>
                <h1 className="sinProductos">No hay Productos en el carrito</h1>
                <Link to='/' className="navegar">Ir a Productos</Link>
            </div>
        )
    }
    return (
        <div className="divTotales">
            {
                cart.map(p=> <CartItem key={p.id} {...p}/>) }
                <h3 className="totalProd">Total de la compra: ${total}</h3>
                <button className="botonLimpiar" onClick={() => clearCart()}>Limpiar carrito</button>
                <Link className="botonCheckout" to='/checkout'>Ir a checkout</Link>
        </div>
    )
}

export default Cart; 