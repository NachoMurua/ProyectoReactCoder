import carrito from "./carrito.svg"
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";


function CartWidget() {
    const totalQuantity = useContext(CartContext);
    console.log(totalQuantity.totalQuantity);
    return (
        <div>
            <Link to="/cart" style={{ display: totalQuantity.totalQuantity > 0 }}>
                <img className="carrito" src={carrito} alt="carrito" />
                {totalQuantity.totalQuantity > 0 && <span style={{ color: 'white' }}>{totalQuantity.totalQuantity}</span>}
            </Link>
        </div>
    );
}

export default CartWidget;


