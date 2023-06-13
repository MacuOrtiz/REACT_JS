import { products } from "../produclist/productMock";
import "./Produclist.css";
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
          <button className="buy-button">Detalle</button>
        </div>
      ))}
    </div>
  );
};

export default ProducList;
