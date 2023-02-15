import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
  ADMIN_CREATE_MAIN_IPO,
  ADMIN_GET_ALL_MAIN_IPO,
  ADMIN_GET_IPO_BY_ID,
  ADMIN_IMG_UPLOAD,
  ADMIN_UPDATE_IPO,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  loading: false,
  getIPODataById: [],
  ID: "",
  getAllMainLineIpoData: [],
  updatedIpo: [],
  createIpo: [],
  uploadImage: "",
};

export const getAllMainLineIpo = createAsyncThunk(
  "admin/getAllMainLineIpo",
  async ({ payload }, { rejectWithValue }) => {
    // const { setId } = useContext(IDContext);
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
      // setId("hello");
      console.log(response?.data?.data);
      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
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
      // console.log(response?.data);
      return response?.data?.IPODetails;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
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
      return response?.data.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
//ADMIN_IMG_UPLOAD
export const uploadIMG = createAsyncThunk(
  "admin/uploadIMG",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL_FOR_ADMIN + ADMIN_IMG_UPLOAD}${payload?.id?.id}`,
        payload?.payload,
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
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);
export const createMainLineIpo = createAsyncThunk(
  "admin/createMainLineIpo",
  async ({ payload }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL_FOR_ADMIN + ADMIN_CREATE_MAIN_IPO}${
          payload.id ? payload.id : null
        }`,
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
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

const mainLineIpoSlice = createSlice({
  name: "mainLineIpoSlice",
  initialState,
  reducers: {
    setClearId: (state, action) => {
      state.ID = action.payload;
    },
  },
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
      .addCase(uploadIMG.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadIMG.fulfilled, (state, action) => {
        // localStorage.setItem("ID", JSON.stringify(action.payload?.id));
        state.ID = action.payload?.id;
        state.uploadImage = action.payload;
        state.loading = false;
      })
      .addCase(uploadIMG.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createMainLineIpo.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMainLineIpo.fulfilled, (state, action) => {
        // localStorage.setItem("ID", JSON.stringify(action.payload?.id));
        state.ID = action.payload?.id;
        state.createIpo = action.payload;
        state.loading = false;
      })
      .addCase(createMainLineIpo.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateIPO.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateIPO.fulfilled, (state, action) => {
        state.loading = false;
        state.updatedIpo = action.payload;
      })
      .addCase(updateIPO.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setClearId } = mainLineIpoSlice.actions;
export default mainLineIpoSlice.reducer;
