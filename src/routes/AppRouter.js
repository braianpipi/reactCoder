import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Views/Home";
import Cart from "../Views/Cart";
import Category from "../Views/Category";
import Error from "../Views/Error";
// import ItemDetail from "../components/ItemDetail/ItemDetail";
import Header from "../components/Header/Header";
import Contact from "../Views/Contact";
import ItemDetailView from "../Views/ItemDetailView";

const AppRouter = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<ItemDetailView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
