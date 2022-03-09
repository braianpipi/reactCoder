import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import Item from "../components/Item/Item";
import SpinnerLoad from "../components/ItemList/Spinner";
const ItemDetailView = () => {
  const [productData, setProductData] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "productos"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductData(docs);
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    getProduct();
  }, [id]);

  return (
    <div>
      {productData.map((data) => {
        return (
          <div className="" key={data.id}>
            {isLoading ? <SpinnerLoad /> : <Item data={data} />}
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailView;

// import { CartContext } from "../components/CartContext/CartContex";

// function ItemDetailView() {
//     const cartContext = useContext(CartContext);
//     const { addToCart } = cartContext;

//     const onAdd = (qty) => {
//       addToCart(productData, qty);
//     };
//   const [isLoading, setIsLoading] = useState(true);

//   const [productData, setProductData] = useState([]);

//   let id = useParams();
//   let productID = id.id;

//   useEffect(() => {
//     const getProducts = async () => {
//       const q = query(collection(db, "productos"), where(documentId, "==", productID) );
//       const docs = [];
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         docs.push({ ...doc.data(), id: doc.id });
//       });
//       setProductData(docs);
//     };
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     getProducts();
//   }, [productID]);
//   if(isLoading){return (

//       <div className="card cardPosicion animate__animated animate__flip text-center bg-dark  " >
//       <div className="col-md-3" key={productData.id}>
//       <div className="overflow">
//       <img
//       className="card-img-top "
//       alt=""
//       src={productData.img}
//       width="300"
//       height="300"
//       />
//       </div>
//       <div className="card-body text-light">
//       <h1 className="card-title">{productData.nombre}</h1>

//       <h2 className="text-primary text-light text-center">
//       {productData.descripcion}
//       </h2>
//       <h4 className="card-text text-secondary text-light">
//             {productData.precio}$
//           </h4>
//         </div>
//         <ItemCount initial={1} stock={productData.stock} onAdd={onAdd} />
//         </div>
//         </div>
//         );
//     }else{
//         <SpinnerLoad/>
//     }
// }

// export default ItemDetailView;
