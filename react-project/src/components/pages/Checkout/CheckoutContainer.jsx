import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../src/firebaseConfig";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CheckoutContainer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    mail: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar la edad (debe ser mayor de 18 años)
    const edad = parseInt(formData.edad);
    if (isNaN(edad) || edad < 18) {
      alert("Debe ser mayor de 18 años para continuar.");
      return;
    }

    try {
      // Guardar los datos en Firebase
      const docRef = await addDoc(collection(db, "usuarios"), formData);
      console.log("Documento guardado con ID: ", docRef.id);

      // Después de guardar los datos, puedes redirigir al usuario a otra página
      // Por ejemplo, una página de agradecimiento o confirmación de la compra
      // Puedes utilizar el componente <Link> de React Router para redirigir
      // a la página deseada:
      // history.push("/ruta-de-agradecimiento");

    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="nombre"
          label="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          name="apellido"
          label="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          name="edad"
          label="Edad"
          value={formData.edad}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          name="telefono"
          label="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          name="mail"
          label="Email"
          value={formData.mail}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Generar orden de compra
        </Button>
      </form>
    </div>
  );
};

export default CheckoutContainer;



