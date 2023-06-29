import { useState } from "react";

const Formulario = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    edad: "",
    mail: "",
  });
  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (!userData.mail.includes("@")) {
      console.log("el email ingresado no es valido");
      return;
    }
    let data = {
      nombreUsuario: userData.name,
      apellidoUsuario: userData.lastName,
      edad: userData.edad,
      email: userData.mail,
    };
    console.log(data);
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h2>Este es un formulario</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese nombre"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingrese apellido"
          name="lastName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingrese edad"
          name="edad"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingresa tu correo"
          name="mail"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
