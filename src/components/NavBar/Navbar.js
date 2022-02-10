import React from 'react';
import "./NavBar.css";
import CardWidget from  "./CardWitget";
import { Link } from 'react-router-dom';
const NavBar = () =>{
    return <div> 
    <nav className="Navegador">
        <ul>
            <li>
        <CardWidget/>

            </li>
            <Link to="/">Home</Link>
            <Link to="/category">Categorias</Link>
            <Link to="/contact">Contacto</Link>
        </ul>
    </nav>
    </div>
}
export default NavBar;
