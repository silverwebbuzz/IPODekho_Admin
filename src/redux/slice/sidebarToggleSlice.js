import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  activeClass: null,
};
const sidebarToggleSlice = createSlice({
  name: "sidebarToggleSlice",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { toggle } = sidebarToggleSlice.actions;
export default sidebarToggleSlice.reducer;
