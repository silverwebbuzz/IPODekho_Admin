import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  companyDescription: "type something",
  objectsOfIssue: "type something",
};

const textEditorSlice = createSlice({
  name: "textEditorSlice",
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.companyDescription = action.payload;
    },
    setObjectsOfIssue: (state, action) => {
      state.objectsOfIssue = action.payload;
    },
  },
});

export const { setDescription, setObjectsOfIssue } = textEditorSlice.actions;
export default textEditorSlice.reducer;
