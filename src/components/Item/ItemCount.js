import React from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, items, onAdd, onLess, onAddCart, data }) => {
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <h6 className=" text-secondary">Stock :{stock}</h6>
        <div className="btn-group text-center justify-content-center p-2 ">
          <button
            className="btn-outline-danger "
            onClick={onLess}
            disabled={items === 1 ? true : null}
          >
            -
          </button>
          <p className="text-light m-2">{items}</p>
          <button
            className="btn-outline-success p-2"
            onClick={onAdd}
            disabled={items === stock ? true : null}
          >
            +
          </button>
        </div>
        <div className="p-2">
          <button
            onClick={() =>
              onAddCart(data.nombre, data.precio, data.id, data.img, data.stock)
            }
            className="btn-primary"
            disabled={stock === 0 ? true : null}
          >
            Añadir al Carrito
          </button>
          <div className="p-2">
            <Link to={"/cart"}>
              <h4 className="btn btn-success">Finalizar Compra</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
