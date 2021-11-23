import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: { value: "" },
  reducers: {
    setSearchedCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchedCity } = citySlice.actions;

export default citySlice.reducer;
