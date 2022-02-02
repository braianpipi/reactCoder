import React, { Component } from "react";
import "./style.css";
// import './App.css';
import Header from "./components/Header/Header";
import CardComponent from "./components/CardComponent/CardComponent";
// import NavBar from "./components/Navbar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <CardComponent
            nombre='Futuro Producto'
            precio='Valor'
            descripcion='saraza'
            img='https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.wp.m4ecmx%2Fwp-content%2Fuploads%2F2015%2F05%2F31143018%2FQu%25C3%25A9-es-el-eCommerce-compressor.jpg&imgrefurl=https%3A%2F%2Fmarketing4ecommerce.mx%2Fque-es-el-ecommerce%2F&tbnid=OQPylqvKITJAbM&vet=12ahUKEwj6-dXWrN31AhXECdQKHZdFAVYQMygBegUIARC4AQ..i&docid=VwqT0gBTPkH7yM&w=750&h=450&itg=1&q=imagen%20ecommerce&ved=2ahUKEwj6-dXWrN31AhXECdQKHZdFAVYQMygBegUIARC4AQ'
          />
        </div>
      </div>
    );
  }
}

export default App;
