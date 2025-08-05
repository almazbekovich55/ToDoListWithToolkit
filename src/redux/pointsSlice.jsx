import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: JSON.parse(localStorage.getItem("points")) || 0,
};

const pointsSlice = createSlice({
  name: "POINTS",
  initialState,
  reducers: {
    incrementPoints: (state) => {
      state.points += 1;
      localStorage.setItem("points", JSON.stringify(state.points));
    },
  },
});

export const { incrementPoints } = pointsSlice.actions;
export default pointsSlice.reducer;
