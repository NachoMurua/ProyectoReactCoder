import { createContext, useState } from "react";
import "./ItemCount.css"


const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const incremento = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decremento = () => {
        if (quantity > 1){
            setQuantity(quantity -1)
        }
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <p>Cantidad:</p>
                <button className="botonesSumaResta" onClick={decremento}>-</button>
                <h3 className="Numero">{quantity}</h3>
                <button className="botonesSumaResta" onClick={incremento}>+</button>
            </div>

            <div>
                <button className="ButtonCarrito" onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount;
