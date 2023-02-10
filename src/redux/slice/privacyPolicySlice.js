import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";
import {
  ADMIN_CREATE_PRIVACY_POLICY,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  isLoading: false,
  createPrivacyPolicyData: [],
};

export const createPrivacyPolicy = createAsyncThunk(
  "createPrivacyPolicy",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        BASE_URL_FOR_ADMIN + ADMIN_CREATE_PRIVACY_POLICY,
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const privacyPolicySlice = createSlice({
  name: "admin/privacyPolicySlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createPrivacyPolicy.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPrivacyPolicy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createPrivacyPolicyData = action.payload;
      })
      .addCase((state) => {
        state.isLoading = false;
      });
  },
});

export default privacyPolicySlice.reducer;
