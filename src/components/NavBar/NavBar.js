import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-container">
      <h2 className="titulo"> La Casa De River Plate</h2>
      <ul className="items">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/niños">Niños</Link>
        </li>
        <li>
          <Link to="/category/damas">Damas</Link>
        </li>
        <li>
          <Link to="/category/hombres">Hombres</Link>
        </li>
        <li>
          <Link to="/">Tarjeta River Plate</Link>
        </li>
      </ul>
      <div>
        <Link to="/CartWidget"> {<CartWidget />}</Link>
      </div>
    </div>
  );
};

export default NavBar;
