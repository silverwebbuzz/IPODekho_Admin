import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  modalIsOpen: false,
  modalType: "EDIT",
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setModalIsOpen: (state, action) => {
      state.modalIsOpen = action.payload;
    },
    commonModalType: (state, action) => {
      state.modalType = action.payload;
    },
  },
});

export const { setModalIsOpen, commonModalType } = modalSlice.actions;
export default modalSlice.reducer;
