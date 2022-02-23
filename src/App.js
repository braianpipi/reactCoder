import React, { Component } from "react";
import "./style.css";
// import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./Views/Home";
import Contact from "./Views/Contact";
import Category from "./Views/Category";
import Error from "./Views/Error";
import ItemDetail from "./components/ItemDetail/ItemDetail";
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

