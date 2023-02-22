import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADMIN_CREATE_NEWS,
  ADMIN_GETNEWSBYID,
  ADMIN_GET_ALL_NEWS,
  ADMIN_GET_NEWS_BY_ID,
  ADMIN_UPDATE_NEWS,
  ADMIN_UPDATE_NEWS_IMAGE,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  newsData: [],
  isLoading: false,
  addNews: [],
  editNews: [],
  editNewsImage: "",
  getDataById: [],
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
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getAllNews = createAsyncThunk(
  "admin/getAllMainLineIpo",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL_FOR_ADMIN + ADMIN_GET_ALL_NEWS}?page=${
          payload?.page ? payload?.page : 1
        }&limit=${payload?.limit ? payload?.limit : 10}`,
        payload,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
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
      return response?.data?.data;
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
        `${BASE_URL_FOR_ADMIN + ADMIN_UPDATE_NEWS_IMAGE}${payloadImage?.id}`,
        payloadImage?.payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response?.data);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);
export const getNewsById = createAsyncThunk(
  "admin/getNewsById",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL_FOR_ADMIN + ADMIN_GET_NEWS_BY_ID}${payload?.id}`,
        payload,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data?.GetSingleNews);
      return response?.data?.GetSingleNews;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// export const getNewsById = createAsyncThunk(
//   "admin/getNewsById",
//   async ({ payload }, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `${BASE_URL_FOR_ADMIN + ADMIN_GETNEWSBYID}${payload?.id}`,
//         payload,
//         {
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response?.data?.GetSingleNews);
//       return response?.data?.GetSingleNews;
//     } catch (error) {
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

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
        state.addNews = action.payload;
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
        state.editNews = action.payload;
      })
      .addCase(updateNews.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateNewsImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateNewsImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.editNewsImage = action.payload;
      })
      .addCase(updateNewsImage.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getNewsById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getDataById = action.payload;
      })
      .addCase(getNewsById.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default newsSlice.reducer;
