// ProductoDetailContainer.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductoDetail from "./ProductoDetail";
import { products } from "../../produclist/productMock";

const ProductoDetailContainer = () => {
  const [productoSelected, setProductoSelected] = useState({});
  const { id } = useParams(); 


  useEffect(() => {
    let productFind = products.find((product) => product.id === id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductoSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(productoSelected);

  return <ProductoDetail productoSelected={productoSelected} />; // Se pasa la prop como 'productoSelected'
};

export default ProductoDetailContainer;
