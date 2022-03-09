import React,{useContext} from 'react';
import {CartContext} from '../CartContext/CartContex'
import {Link} from 'react-router-dom'

const CartWidget = () => {

    //Calculo el total variable de items
    const { addedProducts } = useContext(CartContext);

    const itemsPerProduct = []

    let itemsAmount = 0

    addedProducts.forEach(product => {
        itemsPerProduct.push(product.quantity)
    });

    for (let i=0; i < itemsPerProduct.length; i++){
        itemsAmount = itemsAmount + itemsPerProduct[i]; 
    }

    if(itemsAmount !== 0){
        return(
            <div className='container'>
                <Link to="/cart" className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <p className="cartNumberProds">Cantidad de Productos:{itemsAmount}</p>
            </div>
        )
    }
    else{
        return(<div className="nothing"></div>)
    }
}

export default CartWidget;
// const CardWidget = () => {
//     const cartContext = useContext(CartContext);
//     const {total } = cartContext;
    
  
//     return(
//         <div>
//             <Link to='/cart'>
//             <i className="fa-solid fa-cart-shopping"></i>
//             <div>{total}</div>
//             </Link>
//         </div>
//     )


//     }
// export default CardWidget;