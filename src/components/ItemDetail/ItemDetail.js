import { useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import  "../ItemDetail/ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail= ({id, name, img, description, price, category, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const {addItem} = useContext (CartContext)
    
    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        const item = {
            id,name,price
        }

        addItem(item,quantity)
    }
    
    return(
        
        <div className="divContainerInfo">
            <div className="img">
                <img src={img} alt={name}/>
            </div>

            <div className="divInfo">
                <h2 className="nombreH2">{name}</h2>
                <h3 className="precioh3"> ${price}</h3>
                <h4 className="categoriah4">Categoria: {category}</h4>
                <p className="descripcionP">Descripcion: {description}</p>
                {
                quantityAdded > 0 ?(
                    <Link to='/cart' className="Option">Finalizar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={5} onAdd={handleOnAdd} />
                )
                }
            </div>
            
        </div>
    )
}

export default ItemDetail;