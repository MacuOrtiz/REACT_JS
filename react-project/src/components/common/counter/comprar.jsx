import { useState } from "react";

export const BotonComprar = () => {
  const [contador, setContador] = useState(0);
  console.log(contador);
  console.log(setContador);

  const sumar = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={sumar}>comprar</button>
    </div>
  );
};
