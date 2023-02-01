import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ADMIN_GET_ALL_NEWS, BASE_URL_FOR_ADMIN } from "../../UrlConfig";

const initialState = {
  newsData: [],
  isLoading: false,
};

export const getAllNews = createAsyncThunk(
  "admin/getAllNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        BASE_URL_FOR_ADMIN + ADMIN_GET_ALL_NEWS,
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
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newsData = action.payload;
      })
      .addCase(getAllNews.rejected, (state) => {
        state.isLoading = false;
      });
    //   .addCase(getIpoById.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(getIpoById.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.getIPODataById = action.payload;
    //   })
    //   .addCase(getIpoById.rejected, (state) => {
    //     state.loading = false;
    //   })
    //   .addCase(uploadIMG.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(uploadIMG.fulfilled, (state, action) => {
    //     // localStorage.setItem("ID", JSON.stringify(action.payload?.id));
    //     state.ID = action.payload?.id;
    //     state.loading = false;
    //   })
    //   .addCase(uploadIMG.rejected, (state) => {
    //     state.loading = false;
    //   })
    //   .addCase(createMainLineIpo.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(createMainLineIpo.fulfilled, (state, action) => {
    //     // localStorage.setItem("ID", JSON.stringify(action.payload?.id));
    //     state.ID = action.payload?.id;
    //     state.loading = false;
    //   })
    //   .addCase(createMainLineIpo.rejected, (state) => {
    //     state.loading = false;
    //   })
    //   .addCase(updateIPO.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(updateIPO.fulfilled, (state) => {
    //     state.loading = false;
    //   })
    //   .addCase(updateIPO.rejected, (state) => {
    //     state.loading = false;
    //   });
  },
});

export default newsSlice.reducer;
