import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  done: JSON.parse(localStorage.getItem("done")) || [],
};

const doneSlice = createSlice({
  name: "DONE",
  initialState,
  reducers: {
    addToDone: (state, action) => {
      state.done.push(action.payload);
      localStorage.setItem("done", JSON.stringify(state.done));
    },
    removeFromDone: (state, action) => {
      state.done = state.done.filter((el) => el.id !== action.payload);
      localStorage.setItem("done", JSON.stringify(state.done));
    },
  },
});

export const { addToDone, removeFromDone } = doneSlice.actions;
export default doneSlice.reducer;
