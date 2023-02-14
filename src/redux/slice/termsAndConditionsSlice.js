import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
  ADMIN_CREATE_TERMS_CONDITIONS,
  ADMIN_GETALL_TERMS_CONDITIONS,
  ADMIN_UPDATE_TERMS_CONDITIONS,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  isLoading: false,
  createData: [],
  updateData: [],
  getAllData: [],
};

export const createTermsConditions = createAsyncThunk(
  "admin/createTermsConditions",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        BASE_URL_FOR_ADMIN + ADMIN_CREATE_TERMS_CONDITIONS,
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

export const getAllTermsConditions = createAsyncThunk(
  "admin/getAllTermsConditions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        BASE_URL_FOR_ADMIN + ADMIN_GETALL_TERMS_CONDITIONS,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const updateTermsConditions = createAsyncThunk(
  "admin/updateTermsConditions",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL_FOR_ADMIN + ADMIN_UPDATE_TERMS_CONDITIONS}${payload?.id}`,
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

const termsAndConditionsSlice = createSlice({
  name: "termsAndConditionsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      //CREATE
      .addCase(createTermsConditions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTermsConditions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createData = action.payload;
      })
      .addCase(createTermsConditions.rejected, (state) => {
        state.isLoading = false;
      })
      //READ
      .addCase(getAllTermsConditions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTermsConditions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getAllData = action.payload;
      })
      .addCase(getAllTermsConditions.rejected, (state) => {
        state.isLoading = false;
      })
      //UPDATE
      .addCase(updateTermsConditions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTermsConditions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateData = action.payload;
      })
      .addCase(updateTermsConditions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default termsAndConditionsSlice.reducer;
