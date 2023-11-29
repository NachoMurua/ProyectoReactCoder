import { useState, useEffect } from "react";
import {getProducts, getProductsByCategory} from "../../AsyncMock";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ([])
    const {categoryId}= useParams()

    useEffect(() => {
        const AsyncFunc = categoryId ? getProductsByCategory : getProducts
        AsyncFunc(categoryId)
        .then((response) => {
            setProducts(response)
        })
        .catch((error) =>{console.error(error)
        })
    }, [categoryId]);

    return (
        <div className="divContainerGeneral1">
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;
