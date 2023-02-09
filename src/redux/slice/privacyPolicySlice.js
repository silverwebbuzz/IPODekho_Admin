import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";

const createPrivacyPolicy = createAsyncThunk("createPrivacyPolicy", async());

const privacyPolicySlice = createSlice({
  name: "admin/privacyPolicySlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase((state) => {})
      .addCase((state, action) => {})
      .addCase((state) => {});
  },
});

export default privacyPolicySlice;
