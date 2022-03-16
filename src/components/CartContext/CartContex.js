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

