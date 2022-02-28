import React, { useState } from "react";
// import { Button } from "reactstrap";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount =({initial, stock, onAdd})=>{
  const [qty, setQty] = useState(initial);
  // const [showButton, setShowButton] = useState(false);



  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (

    <div>
      <div>
        <button onClick={(e)=> addProduct(-1)}
        disabled={qty === initial ? true : null}>
        -
        </button>
      <span>{qty}</span>
      <button onClick={(e)=> addProduct(+1)}
      disabled={qty === stock ? true : null}>
        +
      </button>
        </div>
    <button onClick={(e)=>{onAdd(qty)}}
    disabled={stock===0 ? true : null}>
      Añadir
    </button>
    <Link to={"/cart"} >Finalizar compra</Link>
  
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
