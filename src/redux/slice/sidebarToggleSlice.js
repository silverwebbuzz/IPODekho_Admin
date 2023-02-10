import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  activeClass: false,
};
const sidebarToggleSlice = createSlice({
  name: "sidebarToggleSlice",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { toggleSidebar } = sidebarToggleSlice.actions;
export default sidebarToggleSlice.reducer;
