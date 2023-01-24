import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const initialState = {
  activeSidebar: false,
};
const sidebarToggleSlice = createSlice({
  name: "sidebarToggleSlice",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.activeSidebar = action.payload;
    },
  },
});

export const { toggleSidebar } = sidebarToggleSlice.actions;
export default sidebarToggleSlice.reducer;
