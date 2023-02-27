import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
  ADMIN_CREATE_OFFERS,
  ADMIN_GET_ALL_OFFERS,
  ADMIN_UPDATE_OFFER,
  ADMIN_UPDATE_OFFER_IMAGE,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  isLoading: false,
  getAllOffersData: [],
  offerData: null,
  addOfferData: [],
  editOfferData: [],
  offerImage: null,
};

export const getAllOffers = createAsyncThunk(
  "admin/getAllOffers",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL_FOR_ADMIN + ADMIN_GET_ALL_OFFERS}?page=${
          payload?.page
        }&limit=${payload?.limit}`,
        payload,
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
        BASE_URL_FOR_ADMIN + ADMIN_CREATE_OFFERS,
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        }
      );

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
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateOfferImage = createAsyncThunk(
  "admin/updateOfferImage",
  async ({ payloadImage }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL_FOR_ADMIN + ADMIN_UPDATE_OFFER_IMAGE}${
          payloadImage?.payloadId?.id
        }`,
        payloadImage?.payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const offersSlice = createSlice({
  name: "offersSlice",
  initialState,
  reducers: {
    setOfferData: (state, action) => {
      state.offerData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOffer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addOfferData = action.payload;
      })
      .addCase(createOffer.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getAllOffersData = action.payload;
      })
      .addCase(getAllOffers.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOffer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.editOfferData = action.payload;
      })
      .addCase(updateOffer.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateOfferImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateOfferImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offerImage = action.payload;
      })
      .addCase(updateOfferImage.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setOfferData } = offersSlice.actions;
export default offersSlice.reducer;
