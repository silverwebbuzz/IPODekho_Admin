import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADMIN_CREATE_MAIN_IPO,
  ADMIN_GET_ALL_MAIN_IPO,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  loading: false,

  getAllMainLineIpoData: [],
};

export const getAllMainLineIpo = createAsyncThunk(
  "admin/getAllMainLineIpo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        BASE_URL_FOR_ADMIN + ADMIN_GET_ALL_MAIN_IPO,
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
      .addCase(createMainLineIpo.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMainLineIpo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createMainLineIpo.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default mainLineIpoSlice.reducer;
