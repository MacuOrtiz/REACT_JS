import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductoDetail from "./ProductoDetail";
import { products } from "../../produclist/productMock";
import { CartContext } from "../../../context/CartContext";

const ProductoDetailContainer = () => {
  const [productoSelected, setProductoSelected] = useState({});

  const {agregarAlCarrito}= useContext (CartContext)

  const { id } = useParams();

  useEffect(() => {
    console.log("ID del producto:", id);

    let productFind = products.find((product) => product.id === Number(id));
    console.log("Producto encontrado:", productFind);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => {
        console.log("Producto seleccionado:", res);
        setProductoSelected(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log("Estado productoSelected:", productoSelected);

  return <ProductoDetail productoSelected={productoSelected} agregarAlCarrito={agregarAlCarrito} />;
};

export default ProductoDetailContainer;

