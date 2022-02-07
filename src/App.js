import React, { Component } from "react";
import "./style.css";
// import './App.css';
import Header from "./components/Header/Header";
// import CardComponent from "./components/CardComponent/CardComponent";
// import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     counter:0,
  //   };

  //   // this.handlerCounterUp = this.handlerCounterUp.bind(this)
  // }
  // handlerCounterUp = () =>{
  //   console.log('Hiciste Click!');
  // }
  // handlerCounterUp=( )=>{
  //   this.setState({counter: this.state.counter + 1 });
  // }
  // handlerCounterDown=( )=>{
  //   this.setState({counter: this.state.counter - 1 });
  // }
    render() {
    return (
      <div className="App">
        <Header />
        <ItemListContainer
          nombre="Futuro Producto"
          precio="Valor"
          descripcion="saraza"
          img="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png.webp"

        />
        <ItemListContainer
          nombre="Futuro Producto"
          precio="Valor"
          descripcion="saraza"
          img="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png.webp"

        />

      </div>
    );
  }
}

export default App;
