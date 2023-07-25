import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../src/firebaseConfig";

const CheckoutContainer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar la edad del usuario (debe ser mayor de 18 años)
    const edad = parseInt(formData.edad, 10);
    if (edad < 18) {
      alert("Debes ser mayor de 18 años para continuar.");
      return;
    }

    try {
      // Guardar los datos en Firebase
      const docRef = await addDoc(collection(db, "usuarios"), formData);
      console.log("Documento guardado con ID:", docRef.id);

      // Redirigir al CheckoutContainer o a donde desees después de guardar los datos
      // En este ejemplo, redirigimos de vuelta al CheckoutContainer
      window.location.href = "/checkout";
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Completa el formulario</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" />
        <input type="number" name="edad" value={formData.edad} onChange={handleChange} placeholder="Edad" />
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

        <button type="submit">Guardar Datos</button>
      </form>

      <div>
        <Link to="/checkout">Volver al carrito</Link>
      </div>
    </div>
  );
};

export default CheckoutContainer;
