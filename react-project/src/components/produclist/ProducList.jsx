import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Produclist.css";
import { products } from "./productMock";
import FadeLoader from "react-spinners/FadeLoader";

const objetoLoader = {
  display: "block",
  margin: "0 auto",
  
};

const ProducList = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Simulación de una demora de 2 segundos en la carga de productos
    setTimeout(() => {
      setProductList(products);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="product-list">
      {loading ? (
        <div className="loading-container">
          <FadeLoader cssOverride={objetoLoader} color="#36d7b7" />
        </div>
      ) : (
        productList.map((product) => (
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
      )}
    </div>
  );
};

export default ProducList;
