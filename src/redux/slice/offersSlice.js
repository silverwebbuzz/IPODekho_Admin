import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
  ADMIN_CREATE_OFFERS,
  ADMIN_GET_ALL_OFFERS,
  ADMIN_UPDATE_OFFER,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  loading: false,
  getAllOffersData: [],
};

export const getAllOffers = createAsyncThunk(
  "admin/getAllOffers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        BASE_URL_FOR_ADMIN + ADMIN_GET_ALL_OFFERS,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createOffer = createAsyncThunk(
  "admin/createOffer",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL_FOR_ADMIN + ADMIN_CREATE_OFFERS}`,
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
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const updateOffer = createAsyncThunk(
  "user/updateOffer",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL_FOR_ADMIN + ADMIN_UPDATE_OFFER}${payload.id}`,
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data?.message);
      return response?.data?.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const offersSlice = createSlice({
  name: "offersSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createOffer.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOffer.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createOffer.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllOffers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.getAllOffersData = action.payload;
      })
      .addCase(getAllOffers.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateOffer.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOffer.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateOffer.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default offersSlice.reducer;
