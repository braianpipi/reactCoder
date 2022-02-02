import React, { Component } from "react";
import "./style.css";
// import './App.css';
import Header from "./components/Header/Header";
import CardComponent from "./components/CardComponent/CardComponent";
// import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ItemListContainer 
        greeting = 'PROXIMAMENTE PRODUCTOS NUEVOS'
        />
        <div>
          <CardComponent
            nombre='Futuro Producto'
            precio='Valor'
            descripcion='saraza'
            img='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.javierparra.net%2Fcontenidos%2Fanalisis-de-la-compra-de-productos%2F&psig=AOvVaw0fM579EkuT8Z4EMCynEStU&ust=1643916909300000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDxqfDh4fUCFQAAAAAdAAAAABAO'
          />
        </div>
      </div>
    );
  }
}

export default App;
