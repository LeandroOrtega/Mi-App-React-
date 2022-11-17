import { data } from "../data/data";
import React from "react";
import ItemList from "../item/ItemList";
import { useState, useEffect } from "react";
import "./ItemsListContainer.css";
import { useParams } from "react-router-dom";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryName) {
        const filtrarData = data.filter((producto) => {
          return producto.categoria === categoryName;
        });
        resolve(filtrarData);
      } else {
        resolve(data);
      }
    }, 1000);
  });

  useEffect(() => {
    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ItemList products={items} />
    </div>
  );
};

export default ItemsListContainer;
