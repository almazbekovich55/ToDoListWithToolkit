import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import doneReducer from "./doneSlice";
import pointsReducer from "./pointsSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    done: doneReducer,
    points: pointsReducer,
  },
});
