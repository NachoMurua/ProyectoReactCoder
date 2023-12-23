import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import "./CartItem.css"

const CartItem = ({ name, price, id, quantity }) => {
    const { removeItem } = useContext(CartContext)


    return (
        <div className="Cartitem">

            <h2 className="nombreProd">Producto: {name}</h2>
            <p className="cantidadProd">Cantidad: {quantity}</p>
            <p className="subtotalProd">Subtotal: ${price * quantity}</p>

            <button className="botonEliminar" onClick={() => removeItem(id)}>Eliminar del carrito</button>

        </div>
    )
}

export default CartItem;