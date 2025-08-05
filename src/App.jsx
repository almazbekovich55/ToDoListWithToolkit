import React from "react";
import TodoList from "./components/pages/toDoList/ToDoList.jsx";
import DoneList from "./components/pages/doneList/DoneList.jsx";
import Points from "./components/pages/points/Points.jsx";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/pages/Admin/Admin.jsx";
import Header from "./components/layout/Header/Header.jsx";

const App = () => {
  let routes = [
    { id: 1, path: "/", element: <TodoList /> },
    { id: 2, path: "/done", element: <DoneList /> },
    { id: 3, path: "/admin", element: <Admin /> },
  ];

  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
