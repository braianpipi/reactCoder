import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
// import axios from "axios";
import SpinnerLoad from "./Spinner";
import "../Item/ItemCount.css";

// const ItemList = () => {
//   const [Items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios("https://fakestoreapi.com/products/").then((res) =>
//       setItems(res.data)
//     );
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//   }, []);
//   return (
//     <div>
//       {Items.map((item) => {
//         return (
//           <div key={item.id} >
//             {isLoading ? <SpinnerLoad /> : <Item data={item} />}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const ItemList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    getProducts();
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center multicard">
      <div className="row">
        {productsData.map((item) => {
          return (
            <div className="col-md-3" key={item.id}>
              {isLoading ? <SpinnerLoad /> : <Item data={item} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
