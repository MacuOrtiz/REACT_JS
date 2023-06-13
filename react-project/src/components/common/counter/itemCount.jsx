import useCount from "../../../hooks/useCount";

function MyComponent() {
  const { count, añadir, eliminar } = useCount(1, 5);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={añadir}>Añadir</button>
      <button onClick={eliminar}>Quitar</button>
    </div>
  );
}

export default MyComponent;
