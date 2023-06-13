import { useState } from "react";

export const BotonComprar = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>comprar</button>
    </div>
  );
};
