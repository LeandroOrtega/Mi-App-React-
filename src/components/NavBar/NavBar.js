import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-container">
      <h2 className="titulo"> La Casa De River Plate</h2>
      <ul className="items">
        <li>
          <a href="" className="menu_list">
            Inicio
          </a>
        </li>
        <li>
          <a href="" className="menu_list">
            Niños
          </a>
        </li>
        <li>
          <a href="" className="menu_list">
            Damas
          </a>
        </li>
        <li>
          <a href="" className="menu_list">
            Hombres
          </a>
        </li>
        <li>
          <a href="" className="menu_list">
            Tarjeta River Plate
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
