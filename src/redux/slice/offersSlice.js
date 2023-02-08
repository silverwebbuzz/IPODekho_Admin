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
  loading: false,
  modalIsOpen: false,
  modalType: "",
  getAllOffersData: [],
  offerData: null,
  addOfferData: [],
  editOfferData: [],
  offerImage: null,
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
        BASE_URL_FOR_ADMIN + ADMIN_CREATE_OFFERS,
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
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
      console.log(response?.data);
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
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setModalIsOpen: (state, action) => {
      state.modalIsOpen = action.payload;
    },
    setOfferData: (state, action) => {
      state.offerData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOffer.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOffer.fulfilled, (state, action) => {
        state.loading = false;
        state.addOfferData = action.payload;
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
      .addCase(updateOffer.fulfilled, (state, action) => {
        state.loading = false;
        state.editOfferData = action.payload;
      })
      .addCase(updateOffer.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateOfferImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOfferImage.fulfilled, (state, action) => {
        state.loading = false;
        state.offerImage = action.payload;
      })
      .addCase(updateOfferImage.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setModalType, setModalIsOpen, setOfferData } =
  offersSlice.actions;
export default offersSlice.reducer;
