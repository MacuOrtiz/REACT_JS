
import { Link } from "react-router-dom";
import "./Produclist.css";
import { products } from "./productMock";

const ProducList = () => {
  return (
    <div className="product-list">
     
      { products.map((product) => (
      <div key={product.id} className="product-card">
        <h2>{product.title}</h2>
        <img src={product.img} alt={product.title} className="product-image" />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <Link to={`/product/${product.id}`} className="buy-button">
          Detalle
        </Link>
      </div>
    ))
  }
</div>
 )
};
export default ProducList;