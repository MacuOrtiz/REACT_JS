import { Link } from "react-router-dom";
import { products } from "./productMock";

// ...
const ProducList = () => {
  {
    products.map((product) => (
      <div key={product.id} className="product-card">
        <h2>{product.title}</h2>
        <img src={product.img} alt={product.title} className="product-image" />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <Link to={`/detalle/${product.id}`} className="buy-button">
          Detalle
        </Link>
      </div>
    ));
  }
};
export default ProducList;
