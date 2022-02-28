import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContex";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
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
    <div>
      <Card className="imagenCard">
        <CardImg  alt="Card image cap" src={data.image} />
        <CardBody>
          <Link to={`/detail/${data.id}`}>
            <CardTitle tag="h5">{data.title}</CardTitle>
          </Link>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {data.price}$
          </CardSubtitle>
          <CardText>{data.description}</CardText>
          <Link to={`/detail/${data.id}`}>
            <CardText>Mas detalles</CardText>
          </Link>
        </CardBody>
        <ItemCount initial={1} onAdd={onAdd} />
      </Card>
    </div>
  );
};

export default Item;
