import React, { Component } from "react";
import "./style.css";
// import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Category from "./Views/Category";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Error from "./Views/Error";

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Header />

      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/detail/:id' element={<ItemDetail/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </Router>
    )}
}

export default App;

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
          // import CardComponent from "./components/CardComponent/CardComponent";
          // import NavBar from "./components/Navbar";
          // import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
          // import ItemCount from "./ItemCount";