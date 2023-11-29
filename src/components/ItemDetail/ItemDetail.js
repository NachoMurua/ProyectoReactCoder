import ItemCount from "../ItemCount/ItemCount";
import  "../ItemDetail/ItemDetail.css";

const ItemDetail= ({id, name, img, description, price, category, stock}) => {
    return(
        
        <div className="divContainerInfo">
            <div className="img">
                <img src={img} alt={name}/>
            </div>

            <div className="divInfo">
                <h2 className="nombreH2">{name}</h2>
                <h3 className="precioh3">{price}</h3>
                <h4 className="categoriah4">Categoria: {category}</h4>
                <p className="descripcionP">Descripcion: {description}</p>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`cantidad  agregada`, quantity)} />
            </div>
            
        </div>
    )
}

export default ItemDetail;