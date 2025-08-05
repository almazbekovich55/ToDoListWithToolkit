import React, { useEffect } from "react";
import axios from "axios";
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
        <div className="todolist">
            <div className="todolist--list">
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default TodoList;
