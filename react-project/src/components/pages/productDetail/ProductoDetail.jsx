import useCount from "../../../hooks/useCount";
import { Link } from "react-router-dom";

const ProductoDetail = ({ productoSelected }) => {
  if (!productoSelected || Object.keys(productoSelected).length === 0) {
    return <div>Loading...</div>;
  }
  const { count, añadir, eliminar } = useCount(0, productoSelected.stock);

  return (
    <div>
      <h2>{productoSelected.title}</h2>
      <img src={productoSelected.img} alt={productoSelected.title} />
      <p>{productoSelected.description}</p>
      <p>${productoSelected.price}</p>
      <p>Categoría: {productoSelected.category}</p>
      <p> Numero de Personas: {count}</p>
      <button onClick={añadir}>Añadir</button>
      <button onClick={eliminar}>Quitar</button>
      <div>
        <Link to="/count">
          <button>Comprar</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductoDetail;
