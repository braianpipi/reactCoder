import React,{useContext} from 'react';
// import { FontAwesoneIcon} from '@fontawesone/react-fontawesone';
// import {faCartShopping} from '@fontawesone/free-solid-svg-icons';
import {CartContext} from '../CartContext/CartContex'

const CardWidget = () => {
    const cartContext = useContext(CartContext);
    const {cart } = cartContext;
    
  
    return(
        <div>
            {/* <FontAwesoneIcon icon={faCartShopping} size="2x" color="white"/> */}
            <div>{cart.length}</div>
        </div>
    )


    }
export default CardWidget;