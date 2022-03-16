import React, { Component } from "react";
import CartProvider from "./components/CartContext/CartContex"; // import { ItemCountProvider } from "./components/Item/ItemCount";
import AppRouter from "./routes/AppRouter";
import "./App.css";
class App extends Component {
  render() {
    return (
      <CartProvider>
        <AppRouter />
      </CartProvider>
    );
  }
}

export default App;
