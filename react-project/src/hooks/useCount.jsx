import { useState } from "react";

export const useCount = (inicial, stock, minimo = 0) => {
  // Inicializas el estado del contador
  const [count, setCount] = useState(inicial);

  //  incrementar el contador
  const añadir = () => {
    if (count < stock) setCount(count + 1);
  };

  // decrementar el contador
  const eliminar = () => {
    if (count > minimo) setCount(count - 1);
  };

  // Devuelves el valor
  return { count, añadir, eliminar };
};

export default useCount;
