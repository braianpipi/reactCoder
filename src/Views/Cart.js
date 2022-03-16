import React, { useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext/CartContex";
import "../components/Item/Item.css";
// import ItemCount from "../components/Item/ItemCount";
import { Link } from "react-router-dom";
import "../App.css";
import { Table, Alert } from "react-bootstrap";
const Cart = () => {
  const { addedProducts, total, deleteProduct, clearAll, countTotal } =
    useContext(CartContext);

  useEffect(() => {
    countTotal();
  }, [addedProducts, countTotal]);

  if (total === 0) {
    return (
      <div className="justify-content-center">
        <Alert variant="danger">
          <Alert.Heading>
            <p>
              Por el momento no hay Productos
              <i class="fa-solid fa-face-sad-cry"></i>
            </p>
          </Alert.Heading>
          <Link to="/" className="subrayado">
            Mira todas las cartas hermosa que tenes para vos! <i class="fa-solid fa-face-laugh-beam"></i>
          </Link>
        </Alert>
      </div>
    );
  } else {
    return (
      <>
        <div className="card cardPosicion animate__animated animate__flip text-center bg-dark  ">
          <div className="overflow d-flex justify-content-center">
            <Table
              className="medidaTabla"
              striped
              bordered
              hover
              variant="dark"
            >
              <thead>
                <tr>
                  <th></th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>
                    <i className="fa-solid fa-close"></i>
                  </th>
                </tr>
              </thead>
              {addedProducts.map((product) => {
                return (
                  <tbody key={product.id}>
                    <tr>
                      <td>
                        <img
                          src={product.img}
                          className="card-img-top"
                          max-width={10}
                          height={200}
                          alt={product.nombre}
                        />
                      </td>
                      <td>
                        <h3 className="card-title text-primary">
                          {product.nombre}
                        </h3>
                      </td>
                      <td>
                        <h5 className="card-text text-center">
                          Cantidad: {product.quantity}
                        </h5>
                      </td>
                      <td>
                        <h4 className="card-text text-secondary text-bg">
                          ${product.precio}
                        </h4>
                      </td>
                      <td>
                        <button
                          className="btn-light"
                          onClick={() => deleteProduct(product.nombre)}
                        >
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </Table>

            <Table className="medidaTablaDos">
              <tbody>
                <tr>
                  <td colSpan={1} className="text-light">
                    Total
                  </td>
                  <td colSpan={1} className="text-light">
                    {total}$
                  </td>{" "}
                </tr>
                <tr>
                  <td>
                    <button
                      rowSpan={1}
                      onClick={clearAll}
                      className="btn-danger"
                    >
                      Eliminar todas
                    </button>
                  </td>
                  <td rowSpan={1}>
                    <Link to="/Contact" className="subrayado">
                      <button className="btn-success">Terminar Compra</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
