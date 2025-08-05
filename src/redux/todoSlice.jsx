import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoSlice = createSlice({
  name: "TODO",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { setTodos, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
