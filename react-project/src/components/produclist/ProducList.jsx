import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Produclist.css";
import { db } from "../../../src/firebaseConfig";
import FadeLoader from "react-spinners/FadeLoader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { products } from "./productMock";
import { useParams } from "react-router-dom";

const objetoLoader = {
  display: "block",
  margin: "0 auto",
};

const ProducList = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      let itemsCollection = collection(db, "products");
      let querySnapshot;

      if (selectedCategory) {
        const q = query(itemsCollection, where("category", "==", selectedCategory));
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(itemsCollection);
      }

      let products = querySnapshot.docs.map((elemento) => ({
        ...elemento.data(),
        id: elemento.id,
      }));
      setProductList(products);
      setLoading(false);
    };

    fetchProducts();
  }, [categoryName, selectedCategory]);

  const categories = ["Montaña media", "Alta montaña"]; // Agrega aquí tus categorías

  return (
    <div className="product-list">
      <div className="category-buttons-container">
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? "selected" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
          <button
            className={`category-button ${selectedCategory === null ? "selected" : ""}`}
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </button>
        </div>
      </div>

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

