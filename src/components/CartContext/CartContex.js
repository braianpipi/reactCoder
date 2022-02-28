import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  //   const [total, setTotal]= useState(0)

  const addToCart = (data, qty) => {
    if (cart.some((el) => el.id === data.id)) {
      let index = cart.findIndex((el) => el.id === data.id);
      let product = cart[index];
      product.qty = product.qty + qty;

      const newCart = [...cart];
      newCart.splice(index, 1, product);
      setCart([...newCart]);
    } else {
      let product = { ...data, qty };
      setCart([...cart, product]);
    }
  };

  const deleteCardById = (id) => {
    const newCart = [...cart];
    let index = newCart.findIndex((el) => el.id === id);
    newCart.splice(index, 1);
    return setCart([...newCart]);
  };
  const deleteCart = () => {
    return setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, deleteCart, deleteCardById }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
