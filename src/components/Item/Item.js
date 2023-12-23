import { Link } from "react-router-dom";

import "./Item.css"

function Item({ id, greeting, img, name, price }) {

    return (
        <div className="divContainer">
            <div className="card">
                <div className="cardDesing" >
                    <img className="imagenProductos" src={img} alt={greeting} />
                    <h2 className="nombreProductos">{name}</h2>
                    <p className="precio"> ${price}</p>
                    <div className="botonesCompra">
                        <button /*onClick={handleClick}*/ className="ButtonCarrito">
                            <Link to={`/item/${id}`} className="text">Ver detalles</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item