import React from 'react';
import "./NavBar.css";
import CardWidget from  "./CardWitget";

const NavBar = () =>{
    return <div> 
    <nav className="Navegador">
        <ul>
            <li>
        <CardWidget/>

            </li>
            <li>Inicio</li>
            <li>Imagenes</li>
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
        </ul>
    </nav>
    </div>
}
export default NavBar;
