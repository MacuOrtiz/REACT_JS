<<<<<<< HEAD
import { products } from "../produclist/productMock";
import "./Produclist.css";
import { Link } from 'react-router-dom';
const ProducList = () => {
  return (
    <div className="product-list">
      {/* <h1> Tours </h1> */}
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.title}</h2>
          <img
            src={product.img}
            alt={product.title}
            className="product-image"
          />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="buy-button">
            Detalle
          </Link>
        </div>
      ))}
    </div>
  );
};
=======
import { Link } from "react-router-dom";
import { products } from "./productMock";
>>>>>>> 3b7e8143674475240fc26c411eae1715e0153481

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
