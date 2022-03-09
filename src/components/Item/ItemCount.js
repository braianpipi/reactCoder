import React from "react";
// import { Button } from "reactstrap";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, items, onAdd, onLess, onAddCart, data })=> {

  // const [showButton, setShowButton] = useState(false);

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
            onClick={() => onAddCart(data.nombre, data.precio, data.id, data.img, data.stock)}
            className='btn-primary'
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

// export const ItemCountContext = createContext();

// const ItemCount = () => {
//   const initialStock = 10;
//   const [counter, setCounter] = useState(0);
//   const [stock, setStock] = useState(10);
//   // Calculo que el stock deberia venir desde otro lado importarlo como una prop(?)

//   const onAdd = () => {
//     if (initialStock > counter) {
//       return setCounter(counter + 1) && setStock(stock - 1);
//     } else {
//       alert("Por el momento no contamos con mas Stock! Muchas Gracias!");
//     }
//   };
//   const onLess = () => {
//     if (counter > 0) {
//       return setCounter(counter - 1) && setStock(stock + 1);
//     } else {
//       alert("Haz quitado todos los elementos");
//     }
//   };

//   return (
//     <div className="ConjuntoBotones">
//       <div>
//         <Button onClick={onAdd} color="success" size="">
//           +
//         </Button>
//       </div>
//       <div>
//         <p>CANTIDAD = {counter}</p>
//       </div>
//       <div>
//         <p>Stock ={stock}</p>
//       </div>
//       <div>
//         <Button onClick={onLess} color="danger" size="">
//           -
//         </Button>
//       </div>
//     </div>
//   );
// };

// export const ItemCountProvider=()=>{
//   return <ItemCountContext.Provider>{ItemCount()}</ItemCountContext.Provider>
// };
