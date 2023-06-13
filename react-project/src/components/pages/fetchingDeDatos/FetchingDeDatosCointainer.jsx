import { useState, useEffect } from "react";
import FetchingDeDatos from "./FetchingDeDatos";
const FetchingDeDatosCointainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const promiseData = fetch("https://jsonplaceholder.typicode.com/users");
    promiseData
      .then((res) => res.json())
      .then((data) => setUsers(data)) // Corrección aquí
      .catch((err) => console.log(err));
  }, []);

  const createUser = () => {
    let data = {
      name: "Maria",
      userName: "macu",
      email: "macuortiz.c@hmail.com",
    };
    const promise = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
    promise
      .then((res) => res.json())
      .then((data) => console.log("el usuario fue creado", data))
      .catch((err) => console.log(err));
  };

  return <FetchingDeDatos users={users} createUser={createUser} />;
};

export default FetchingDeDatosCointainer;
