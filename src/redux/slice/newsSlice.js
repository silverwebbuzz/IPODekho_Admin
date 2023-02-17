import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADMIN_CREATE_NEWS,
  ADMIN_GET_ALL_NEWS,
  ADMIN_UPDATE_NEWS,
  ADMIN_UPDATE_NEWS_IMAGE,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  newsData: [],
  isLoading: false,
  addNews: [],
  editNews: [],
  editNewsImage: null,
};

export const createNews = createAsyncThunk(
  "admin/createNews",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        BASE_URL_FOR_ADMIN + ADMIN_CREATE_NEWS,
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getAllNews = createAsyncThunk(
  "admin/getAllNews",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL_FOR_ADMIN + ADMIN_GET_ALL_NEWS}?page=${
          payload?.page
        }&limit=${payload?.limit}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const updateNews = createAsyncThunk(
  "admin/updateNews",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL_FOR_ADMIN + ADMIN_UPDATE_NEWS}${payload.id}`,
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

export const updateNewsImage = createAsyncThunk(
  "admin/updateNewsImage",
  async ({ payloadImage }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL_FOR_ADMIN + ADMIN_UPDATE_NEWS_IMAGE}${
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

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNews.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createNews.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newsData = action.payload;
      })
      .addCase(getAllNews.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateNews.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateNews.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateNewsImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateNewsImage.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateNewsImage.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default newsSlice.reducer;
