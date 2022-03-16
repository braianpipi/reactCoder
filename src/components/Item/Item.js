import React, { useContext, useState } from "react";

import ItemCount from "./ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContex";
import { Button } from "react-bootstrap";
const Item = ({ data }) => {
  const initial = 1;
  const stock = data.stock;
  const [items, setItems] = useState(initial);
  const [cartAdd, setCartAdd] = useState(false);
  const { addedProducts, setAddedProducts } = useContext(CartContext);

  const onAdd = () => {
    if (items < stock) {
      setItems(items + 1);
    }
  };

  const onLess = () => {
    if (items > initial) {
      setItems(items - 1);
    }
  };
  const onAddCart = (
    ProductTitle,
    ProductPrice,
    ProductId,
    ProductImage,
    Stock
  ) => {
    setCartAdd(true);
    const findProduct = addedProducts.find(
      (product) => ProductTitle.toLowerCase() === product.nombre.toLowerCase()
    );
    if (findProduct) {
      if (findProduct.quantity < stock) {
        findProduct.quantity += items;
      }
      if (findProduct.quantity > stock) {
        findProduct.quantity = stock;
      }
    } else {
      addedProducts.push({
        id: ProductId,
        nombre: ProductTitle,
        precio: ProductPrice,
        img: ProductImage,
        quantity: items,
        stock: Stock,
      });
    }

    setAddedProducts([...addedProducts]);
  };

  return (
    <div className="card cardPosicion animate__animated animate__flip text-center bg-dark  ">
      <div className="overflow">
        <img
          className="card-img-top "
          alt=""
          src={data.img}
          width="300"
          height="300"
        />
      </div>
      <div className="card-body text-light">
        <h3 className="card-title">{data.nombre}</h3>
        <h4 className="card-text text-secondary text-light">{data.precio}$</h4>
        <Link to={`/detail/${data.id}`}>
          <h4 className="btn btn-outline-warning">Mas detalles</h4>
        </Link>
      </div>
      {cartAdd ? (
        <Link to="/cart" className="buttonContainer">
          <Button variant="success" size="lg">
            Ir al carrito<i class="fa-solid fa-check-to-slot"></i>{" "}
          </Button>
        </Link>
      ) : (
        <ItemCount
          stock={stock}
          items={items}
          onAdd={onAdd}
          onLess={onLess}
          onAddCart={onAddCart}
          data={data}
        />
      )}
    </div>
  );
};

export default Item;
