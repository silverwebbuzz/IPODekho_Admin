import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADMIN_CREATE_MAIN_IPO,
  ADMIN_GET_ALL_MAIN_IPO,
  ADMIN_GET_IPO_BY_ID,
  ADMIN_UPDATE_IPO,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  loading: false,
  getIPODataById: [],
  getAllMainLineIpoData: [],
};

export const getAllMainLineIpo = createAsyncThunk(
  "admin/getAllMainLineIpo",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        BASE_URL_FOR_ADMIN + ADMIN_GET_ALL_MAIN_IPO,
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
export const getIpoById = createAsyncThunk(
  "admin/getIpoById",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL_FOR_ADMIN + ADMIN_GET_IPO_BY_ID}${payload.id}`,
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
      return response?.data?.IPODetails;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateIPO = createAsyncThunk(
  "admin/UpdateMainLineIpo",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL_FOR_ADMIN + ADMIN_UPDATE_IPO}${payload.id}`,
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
      return response?.data?.Data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createMainLineIpo = createAsyncThunk(
  "admin/createMainLineIpo",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL_FOR_ADMIN + ADMIN_CREATE_MAIN_IPO}`,
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "Content-Type': 'multipart/form-data",
          },
        }
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

const mainLineIpoSlice = createSlice({
  name: "mainLineIpoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMainLineIpo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMainLineIpo.fulfilled, (state, action) => {
        state.loading = false;
        state.getAllMainLineIpoData = action.payload;
      })
      .addCase(getAllMainLineIpo.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getIpoById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIpoById.fulfilled, (state, action) => {
        state.loading = false;
        state.getIPODataById = action.payload;
      })
      .addCase(getIpoById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createMainLineIpo.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMainLineIpo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createMainLineIpo.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateIPO.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateIPO.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateIPO.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default mainLineIpoSlice.reducer;
