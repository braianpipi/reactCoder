import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import axios from "axios";
import SpinnerLoad from "./Spinner";
import { Link } from "react-router-dom";


const ItemList = () => {
  const [Items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://fakestoreapi.com/products/").then((res) =>
      setItems(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, []);
  return (
    <div>
      {Items.map((item) => {
        return (
          <div>
            {isLoading ? <SpinnerLoad /> : <Link to={`/detail/${item.id}`} ><Item key={item.id} data={item} /></Link>}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
