import React from "react";
import "./ItemsListContainer.css";

const ItemsListContainer = (props) => {
  return (
    <div className="mensaje-container">
      <h3 className="mensaje">{props.nombre}</h3>
    </div>
  );
};
export default ItemsListContainer;
