import React from "react";
import carrito from "./../../../src/carrito/carrito.jpg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="navBar_logo">
      <img className="navBar_img" src={carrito} alt="cart widget" />
    </div>
  );
};

export default CartWidget;
