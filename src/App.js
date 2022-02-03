import React, { Component } from "react";
import "./style.css";
// import './App.css';
import Header from "./components/Header/Header";
// import CardComponent from "./components/CardComponent/CardComponent";
// import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends Component {
  constructor(){
    super();
    this.state={
      counter:0,
    };

    // this.handlerCounterUp = this.handlerCounterUp.bind(this)
  }
  // handlerCounterUp = () =>{
  //   console.log('Hiciste Click!');
  // }
  handlerCounterUp=( )=>{
    this.setState({counter: this.state.counter + 1 });
  }
  handlerCounterDown=( )=>{
    this.setState({counter: this.state.counter - 1 });
  }
    render() {
    return (
      <div className="App">
        <Header />
        <ItemListContainer
          nombre="Futuro Producto"
          precio="Valor"
          descripcion="saraza"
          img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.javierparra.net%2Fcontenidos%2Fanalisis-de-la-compra-de-productos%2F&psig=AOvVaw0fM579EkuT8Z4EMCynEStU&ust=1643916909300000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDxqfDh4fUCFQAAAAAdAAAAABAO"
          stock="10"
        />
        <ItemListContainer
          nombre="Futuro Producto"
          precio="Valor"
          descripcion="saraza"
          img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.javierparra.net%2Fcontenidos%2Fanalisis-de-la-compra-de-productos%2F&psig=AOvVaw0fM579EkuT8Z4EMCynEStU&ust=1643916909300000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDxqfDh4fUCFQAAAAAdAAAAABAO"
          stock="10"
        />
      <div className='CounterSection'>
        <p>
          Counter:{this.state.counter}
        </p>
        <div className='btn-section'>
        <button onClick={this.handlerCounterUp}>
            Incrementar
          </button>
        <button onClick={this.handlerCounterDown}>
            Decrementar
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
