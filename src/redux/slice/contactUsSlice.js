import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ADMIN_GETALL_CONTACTS, BASE_URL_FOR_ADMIN } from "../../UrlConfig";

const initialState = {
  isLoading: false,
  getAllData: [],
};

export const getAllContacts = createAsyncThunk(
  "admin/getAllContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        BASE_URL_FOR_ADMIN + ADMIN_GETALL_CONTACTS,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data?.contactList);
      return response?.data?.contactList;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const contactUsSlice = createSlice({
  name: "contactUsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      //READ
      .addCase(getAllContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getAllData = action.payload;
      })
      .addCase(getAllContacts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default contactUsSlice.reducer;
