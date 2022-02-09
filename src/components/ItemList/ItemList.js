import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemList = () => {
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (<div>

      {items.map((item) => {
        return (
          <div key={item.id}>
            <Item data={item} />
          </div>
        );
      })}
    </div>);

};

export default ItemList;
