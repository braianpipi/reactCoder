import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Item from "../Item/Item";

function ItemDetail() {
  const [Product, setProduct] = useState([]);

  let id = useParams();
  let productID = id.id;

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${productID}`).then((res) =>
      setProduct(res.data)
    );
  }, [productID]);

  return (
    <div>
      {Product.map((num) => {
        return (
          <div key={num.id}>
            <Item data={num} />
          </div>
        );
      })}
    </div>
  );
}

export default ItemDetail;
