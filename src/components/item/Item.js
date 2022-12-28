import { Link } from "react-router-dom";
import { useState } from "react";
import "./item.css";

const Item = ({ producto }) => {
  const [contador, setContador] = useState(0);
  const cambio = () => {
    setContador(contador + 1);
  };
  return (
    <div className="productos">
      <div className="producto">
        <Link to={`detail/${producto.id} `}>
          <div>
            <h2>{producto.title}</h2>
            <img alt={producto.title} src={`img/${producto.imgId}`} />
            <h4>Categoria: {producto.categoryId}</h4>
          </div>
        </Link>
        <button className="boton" onClick={cambio}>
          Agregar al carrito
        </button>
        <div>{contador}</div>
      </div>
    </div>
  );
};

export default Item;
