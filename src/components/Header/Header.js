import React from 'react';
import "./Header.css";
import img from './logo.jpeg';
import NavBar from '../Navbar';

const Header = () => {
  return(
      <div clasname='Header'>
          <img src={img} alt='Logo de la pagina' width={50}/>
        <NavBar />

      </div>
      
      );
};

export default Header;
