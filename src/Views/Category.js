import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Item from "../components/Item/Item";
import SpinnerLoad from "../components/ItemList/Spinner";
const Category = () => {
  const [productCategoryData, setProductCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();
  useEffect(() => {
    const getProductCategoryData = async () => {
      const q = query(
        collection(db, "productos"),
        where("genero", "==", category)
      );
      const docs = [];
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductCategoryData(docs);
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    getProductCategoryData();
  }, [category]);

  return (
    <div className="container d-flex justify-content-center align-items-center multicard">
      <div className="row">
      {productCategoryData.map((data) => {
        return (
          <div className="col-md-3" key={data.id}>
            {isLoading ? <SpinnerLoad /> : <Item data={data} />}
          </div>
        );
      })}
    </div>
    </div>
  );
};
export default Category;
