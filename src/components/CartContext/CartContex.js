import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const deleteProduct = (productName) => {
    const updatedProducts = addedProducts.filter(
      (product) => productName !== product.nombre
    );
    setAddedProducts(updatedProducts);
    countTotal();
  };
  const clearAll = () => {
    setAddedProducts([]);
    countTotal();
  };

  const countTotal = () => {
    const totalPerProduct = [];

    addedProducts.forEach((product) => {
      let totalPrice = product.precio * product.quantity;
      totalPerProduct.push(totalPrice);
    });

    let totalToPay = 0;

    for (let i = 0; i < totalPerProduct.length; i++) {
      totalToPay = totalToPay + totalPerProduct[i];
    }

    setTotal(totalToPay);
  };
  return (
    <CartContext.Provider
      value={{
        addedProducts,
        setAddedProducts,
        total,
        setTotal,
        deleteProduct,
        clearAll,
        countTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// const addToCart = (data, qty) => {
//   if (cart.some((el) => el.id === data.id)) {
//     let index = cart.findIndex((el) => el.id === data.id);
//     let product = cart[index];
//     product.qty = product.qty + qty;

//     const newCart = [...cart];
//     newCart.splice(index, 1, product);
//     setCart([...newCart]);
//   } else {
//     let product = { ...data, qty };
//     setCart([...cart, product]);
//   }
// };

// const deleteCardById = (id) => {
//   const newCart = [...cart];
//   let index = newCart.findIndex((el) => el.id === id);
//   newCart.splice(index, 1);
//   return setCart([...newCart]);
// };
// const deleteCart = () => {
//   return setCart([]);
// };
