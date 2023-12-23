import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout"
import { CartProvider } from "./components/CartContext/CartContext";

function App(){

    return (
        <BrowserRouter>
        <CartProvider>
        <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="*" element={<h4>ERROR 404 PAGINA NO ENCONTRADA</h4>}/>
            </Routes>
            </CartProvider>
        </BrowserRouter>
        
    )
}

export default App;