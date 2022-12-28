// import { data } from "../data/data";
import React from "react";
import ItemList from "../item/ItemList";
import { useState, useEffect } from "react";
import "./ItemsListContainer.css";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemsListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "productos");

    getDocs(querySnapshot)
      .then((response) => {
        const data = response.docs.map((producto) => {
          // console.log(producto.data());
          // console.log(producto.id);
          return {
            id: producto.id,
            ...producto.data(),
          };
        });
        console.log(data);
        setProductos(data);
        setTimeout(() => {
          if (categoryName) {
            const filtrarData = data.filter((item) => {
              return item.categoryId === categoryName;
            });
          } else {
            console.log("");
          }
        }, 0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, [categoryName]);
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemsListContainer;
