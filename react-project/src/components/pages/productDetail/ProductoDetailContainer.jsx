import { useState, useEffect } from "react";
import ProductoDetail from "./ProductoDetail";
import { products } from "../../produclist/productMock";

const ProductoDetailContainer = () => {
  const [productoSelected, setProductoSelected] = useState({});

  let id = 2;

  useEffect(() => {
    let productFind = products.find((product) => product.id === id);

    const getProduct = new Promise((res, rej) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductoSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(productoSelected);

  return <ProductoDetail producto={productoSelected} />;
};

export default ProductoDetailContainer;
