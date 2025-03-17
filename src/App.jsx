import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const handleAddUser = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: name,
      });
      alert("Usuario agregado con éxito");
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const usersList = querySnapshot.docs.map((doc) => doc.data());
    setUsers(usersList);
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>Agregar Usuario</button>
      <button onClick={fetchUsers}>Obtener Usuarios</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
