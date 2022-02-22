import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
// import Item from "../Item/Item";
import ItemDetailView from "../../Views/ItemDetailView"

function ItemDetail() {
  const [Product, setProduct] = useState([]);

  let id = useParams();
  console.log(id)
  let productID = id.id;

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${productID}`).then((res) =>
      setProduct(res.data)
    );

  }, [productID]);

  return (
    <div>
      {Product.map((item) => {
        return (
          <div key={item.id}>
            <ItemDetailView  data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default ItemDetail;
