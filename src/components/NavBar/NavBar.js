import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css"


function NavBar (){

    return (

        <nav className="NavBar">
            <div>
                <h1 className="Titulo"><Link className="linkA" to="/">The <br/> Black Store.</Link></h1>
            </div>
            <div>
                <NavLink to={`/category/Zapatillas`} className= {({isActive}) => isActive ? `activeOption`: 'option'}><button className="ButtonItem">Zapatillas</button></NavLink>
                <NavLink to={`/category/Medias`} className= {({isActive}) => isActive ? `activeOption`: 'option'}><button className="ButtonItem">Medias</button></NavLink>
                <NavLink to={`/category/Cordones`} className= {({isActive}) => isActive ? `activeOption`: 'option'}><button className="ButtonItem">Cordones</button></NavLink>
            </div>
            <CartWidget/>
        </nav>

    )

}

export default NavBar;