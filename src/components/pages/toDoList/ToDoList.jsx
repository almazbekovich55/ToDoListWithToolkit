import React, { useEffect } from "react";
import axios from "axios";
import "./ToDoList.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTodos, removeTodo } from "../../../redux/todoSlice";
import { addToDone } from "../../../redux/doneSlice";
import { incrementPoints } from "../../../redux/pointsSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((s) => s.todo.todos);

  const getTodos = async () => {
    const res = await axios.get(
      "https://68916c9b447ff4f11fbc8524.mockapi.io/todo/Commenta"
    );
    dispatch(setTodos(res.data));
  };

  const handleDone = (item) => {
    dispatch(addToDone(item));
    dispatch(removeTodo(item.id));
    dispatch(incrementPoints());
  };

  const handleCancel = async (id) => {
    await axios.delete(
      `https://68916c9b447ff4f11fbc8524.mockapi.io/todo/Commenta/${id}`
    );
    dispatch(removeTodo(id));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section id="todolist">
      <div className="container">
        <h2> Список задач</h2>

        {todos.length === 0 ? (
          <p style={{ marginTop: "20px" }}>Нет задач</p>
        ) : (
          <div className="todolist">
            {todos.map((el) => (
              <div key={el.id} className="todolist--item">
                <h3>{el.name}</h3>
                <p>{el.comment}</p>
                <div className="todolist--btns">
                  <button onClick={() => handleDone(el)}>Done</button>
                  <button onClick={() => handleCancel(el.id)}> Cancel</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TodoList;
