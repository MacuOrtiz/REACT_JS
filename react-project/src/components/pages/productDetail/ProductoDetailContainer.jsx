import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductoDetail from "./ProductoDetail";
import { products } from "../../produclist/productMock";

const ProductoDetailContainer = () => {
  const [productoSelected, setProductoSelected] = useState({});
  const { id } = useParams(); // Importa y utiliza el componente useParams

  useEffect(() => {
    let productFind = products.find((product) => product.id === Number(id));

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductoSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  return <ProductoDetail productoSelected={productoSelected} />;
};

export default ProductoDetailContainer;
