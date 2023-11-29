import carrito from "./carrito.svg"

import { useState } from "react"


function CartWidget (){

    const [count] = useState(0) 
    
    return (
        <div>
            <img className="carrito" src={carrito} alt="carrito"/>
            <span style={{ color: 'white' }}>{count}</span>
        </div>
    )
}

export default CartWidget;