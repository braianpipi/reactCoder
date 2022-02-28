import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Views/Home";
import Cart from "../Views/Cart";
import Category from "../Views/Category";
import Error from "../Views/Error";
import ItemDetail from "../components/ItemDetail/ItemDetail";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<ItemDetail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
