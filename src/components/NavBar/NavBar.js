import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-container">
      <h2 className="titulo"> La Casa De River Plate</h2>
      <ul className="items">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/category/niños" activeClassName="active">
            Niños
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/damas" activeClassName="active">
            Damas
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/hombres" activeClassName="active">
            Hombres
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            Tarjeta River Plate
          </NavLink>
        </li>
      </ul>
      <div>
        <NavLink to="/carrito" activeClassName="active">
          {" "}
          {<CartWidget />}
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
