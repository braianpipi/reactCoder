import React, { useContext, useEffect } from "react";
import { CartContext } from "../components/CartContext/CartContex";
// import ItemCount from "../components/Item/ItemCount";
import { Link } from "react-router-dom";

const Cart = () => {
  const { addedProducts, total, deleteProduct, clearAll, countTotal } =
    useContext(CartContext);

  useEffect(() => {
    countTotal();
  }, [addedProducts, countTotal]);

  if (total === 0) {
    return (
      <div className="messageIfNoItems">
        <p className="noItems">There are no items selected</p>
        <Link to="/" className="backHomeSign">
          Go back to Home
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <div className="card cardPosicion animate__animated animate__flip text-center bg-dark  ">
          <div className="overflow">
            {addedProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-sm-12 col-md-6 col-lg-4 col-xxl-3"
                >
                  <div
                    className="card cardContainer"
                    style={{ width: "18rem" }}
                  >
                    <div className="imageContainer">
                      <img
                        src={product.img}
                        className="card-img-top"
                        alt={product.nombre}
                      />
                    </div>
                    <div className="card-body cardBodyContainer">
                      <h3 className="card-title">{product.nombre}</h3>
                      <h4 className="card-text text-secondary text-light">
                        ${product.precio}
                      </h4>
                      <h5 className="card-text text-center">
                        Quantity: {product.quantity}
                      </h5>
                    </div>
                    <button
                      className="deleteButton1"
                      onClick={() => deleteProduct(product.nombre)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="total">
          <p>Total: {total}</p>
        </div>
        <div className="d-flex justify-content-center deleteAllOrFinish">
          <button onClick={clearAll} className="deleteButton2">
            Delete all
          </button>
          <Link to="/form">
            <button className="finishButton">Finish purchase</button>
          </Link>
        </div>
      </>
    );
  }
};

export default Cart;
