import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HedersForApiRequest } from "../../Constants/commonConstants";
import {
  ADMIN_CREATE_MAIN_IPO,
  ADMIN_EDIT_MAIN_IPO,
  ADMIN_GET_ALL_MAIN_IPO,
  ADMIN_GET_MAIN_IPO_BY_ID,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  loading: false,
  getAllMainLineIpoData: [],
  getMainLineIpoByIdData: [],
};

export const getAllMainLineIpo = createAsyncThunk(
  "admin/getAllMainLineIpo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        BASE_URL_FOR_ADMIN + ADMIN_GET_ALL_MAIN_IPO,
        {
          HedersForApiRequest,
        }
      );

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMainLineIpoById = createAsyncThunk(
  "admin/getMainLineIpoById",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL_FOR_ADMIN + ADMIN_GET_MAIN_IPO_BY_ID}${payload?.id}`,
        {
          HedersForApiRequest,
        }
      );

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
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
          HedersForApiRequest,
        }
      );
      console.log(response?.data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
export const editMainLineIpo = createAsyncThunk(
  "admin/editMainLineIpo",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL_FOR_ADMIN + ADMIN_EDIT_MAIN_IPO}${payload?.id}`,
        payload,
        {
          HedersForApiRequest,
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
      .addCase(getMainLineIpoById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMainLineIpoById.fulfilled, (state, action) => {
        state.loading = false;
        state.getMainLineIpoByIdData = action.payload;
      })
      .addCase(getMainLineIpoById.rejected, (state) => {
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
      .addCase(editMainLineIpo.pending, (state) => {
        state.loading = true;
      })
      .addCase(editMainLineIpo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(editMainLineIpo.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default mainLineIpoSlice.reducer;
