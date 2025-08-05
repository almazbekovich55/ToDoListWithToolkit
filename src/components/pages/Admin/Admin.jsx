import React, { useState } from "react";
import "./Admin.scss";
import axios from "axios";

const Admin = () => {
  const [name, setName] = useState("");
  const [commet, setCommet] = useState("");

  async function addTask() {
    const res = await axios.post(
      `https://68916c9b447ff4f11fbc8524.mockapi.io/todo/Commenta`,
      {
        id: Date.now(),
        name,
      }
    );
    alert("Успешно добавлено");
    setName("");
    setCommet("");
  }

  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Comment"
            value={commet}
            onChange={(e) => setCommet(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
