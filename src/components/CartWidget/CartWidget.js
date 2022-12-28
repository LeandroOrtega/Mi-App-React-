import carrito from "./../../../src/carrito/carrito.jpg";
import "./CartWidget.css";
// import Size from "../size/Size";
const CartWidget = () => {
  return (
    <div className="navBar_logo">
      <div className="carr">0 </div>
      <img className="navBar_img" src={carrito} alt="cart widget" />
    </div>
  );
};

export default CartWidget;
