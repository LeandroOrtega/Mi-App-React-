import { Link } from "react-router-dom";

const ItemList = ({ producto }) => {
  return (
    <Link to={`detail/${producto.id} `}>
      <div>
        <h2>{producto.nombre}</h2>
        <h3>{producto.categoria}</h3>
      </div>
    </Link>
  );
};
export default ItemList;
