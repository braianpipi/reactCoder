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
import SpinnerLoad from "../components/ItemList/Spinner";
import ItemDetail from "../components/ItemDetail/ItemDetail";
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
            {isLoading ? <SpinnerLoad /> : <ItemDetail data={data} />}
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailView;
