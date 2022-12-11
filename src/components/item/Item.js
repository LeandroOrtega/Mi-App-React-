import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <Link to={`detail/${producto.id} `}>
      <div>
        <h2>{producto.title}</h2>
        <img alt={producto.title} src={`img/${producto.imgId}`} />
        <h3>{producto.categoryId}</h3>
      </div>
    </Link>
  );
};

export default Item;
