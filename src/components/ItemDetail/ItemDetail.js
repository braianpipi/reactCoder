import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Item from "../Item/Item";

import Header from "../Header/Header";

// import ItemDetailView from "../../Views/ItemDetailView"

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
            <Header/>
          <div key={Product.id}>
            <Item  data={Product} />
          </div>
          </div>
        );
}

export default ItemDetail;
