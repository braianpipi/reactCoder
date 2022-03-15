import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContex";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NavBar.css"
const CartWidget = () => {
  //Calculo el total variable de items
  const { addedProducts } = useContext(CartContext);

  const itemsPorProducto = [];

  let itemsCarrito = 0;

  addedProducts.forEach((product) => {
    itemsPorProducto.push(product.quantity);
  });

  for (let i = 0; i < itemsPorProducto.length; i++) {
    itemsCarrito = itemsCarrito + itemsPorProducto[i];
  }

  if (itemsCarrito !== 0) {
    return (
      <div>
        <Button variant="info">
          <Link to="/cart" className="subrayado">
            <i className="fa-solid fa-cart-shopping"></i>
             Cantidad : {itemsCarrito}
            {""}
          </Link>
        </Button>
      </div>
    );
  } else {
    return <div className="nothing"> <i className="fa-solid fa-cart-shopping"></i></div>;
  }
};

export default CartWidget;






















//       addedProducts.map((item) => {
//         return (
//           <div>
//             <Navbar.Brand>
//               <i class="fa-solid fa-cart-arrow-down"></i>
//             </Navbar.Brand>
//             <NavDropdown.Item>
//               <div className="card cardPosicion animate__animated animate__flip text-center bg-dark  ">
//                 <div className="overflow">
//                   <img
//                     className="card-img-top "
//                     alt=""
//                     src={item.img}
//                     width="50"
//                     height="50"
//                   />
//                 </div>
//                 <div className="card-body text-light">
//                   <h3 className="card-title">{item.nombre}</h3>
//                   <h4 className="card-text text-secondary text-light">
//                     {item.precio}$
//                   </h4>
//                 </div>

//               </div>
//             </NavDropdown.Item>
//           </div>
//         );
//       });
//     }
//  else {
//     return <div className="nothing"></div>;
//   }}
// ;

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
