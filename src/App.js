import React, { Component } from "react";
import "./style.css";
// import './App.css';
import Header from "./components/Header/Header";
// import CardComponent from "./components/CardComponent/CardComponent";
// import NavBar from "./components/Navbar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemCount from "./ItemCount";
import ItemList from "./components/ItemList/ItemList";
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
        <ItemList />

      </div>
    );
  }
}

export default App;
