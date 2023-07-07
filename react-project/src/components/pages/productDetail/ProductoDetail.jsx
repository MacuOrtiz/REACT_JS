// ProductoDetail.js
const ProductoDetail = ({ productoSelected }) => {
  return (
    <div>
      <h2>{productoSelected.title}</h2>
      <img src={productoSelected.img} alt={productoSelected.title} />
      <p>{productoSelected.description}</p>
      <p>${productoSelected.price}</p>
      <p>Stock: {productoSelected.stock}</p>
      
      <button >Añadir</button>
      <button >Quitar</button>
      <p>Categoría: {productoSelected.category}</p>
      {/* Agregar lógica para seleccionar la cantidad y agregar al carrito */}
    </div>
  );
};

export default ProductoDetail;

