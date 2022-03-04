import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContex";
import ItemCount from "./ItemCount";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const onAdd = (qty) => {
    addToCart(data, qty);
  };

  return (
    <div className="card cardPosicion animate__animated animate__flip text-center bg-dark ">
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
        {/* </Link> */}
        {/* <CardText>{data.descripcion}</CardText> */}
        {/* <Link to={`/detail/${data.id}`}> */}
        <Link to={`/detail/${data.id}`}>
          <h4 className="btn btn-outline-warning">Mas detalles</h4>
        </Link>
      </div>
      <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
    </div>
  );
};

export default Item;
