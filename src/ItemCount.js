import React, { useState } from "react";
import { Button } from "reactstrap";
import "./ItemCount.css";

const ItemCount = () => {
    const initialStock = 10 ;
    const [counter, setCounter ] = useState(0);
    const [stock, setStock] = useState(10) 
// Calculo que el stock deberia venir desde otro lado importarlo como una prop(?)

    const onAdd = () =>{
        if(initialStock > counter){
        
            return setCounter(counter + 1 ) ,setStock(stock -1);
        }else{
            alert ("Por el momento no contamos con mas Stock! Muchas Gracias!")
        }
    }
    const onLess = () =>{
        if(counter > 0 ){

            return setCounter(counter - 1 ), setStock(stock + 1)
        }else{
            alert("Haz quitado todos los elementos")
        }

    }

    return (

    <div className="ConjuntoBotones">
      <div>
        <Button onClick={onAdd} color="success" size="">
          +
        </Button>
      </div>
      <div>
        <p>CANTIDAD = {counter}</p>
      </div>
      <div>
        <p>Stock ={stock}</p>
      </div>
      <div>
        <Button onClick={onLess} color="danger" size="">
          -
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
