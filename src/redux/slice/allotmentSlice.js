import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADMIN_GET_ALL_IPO_ALLOTMENT_TIPS,
  BASE_URL_FOR_ADMIN,
} from "../../UrlConfig";

const initialState = {
  loading: false,
  getAllAllotmentTipsData: [],
};
export const getAllAllotmentTips = createAsyncThunk(
  "admin/getAllAllotmentTips",
  async (_, { rejectWithValue }) => {
    // const { setId } = useContext(IDContext);
    try {
      const response = await axios.get(
        BASE_URL_FOR_ADMIN + ADMIN_GET_ALL_IPO_ALLOTMENT_TIPS,

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
const allotmentTipsSlice = createSlice({
  name: "allotmentTipsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAllotmentTips.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllAllotmentTips.fulfilled, (state, action) => {
        state.loading = false;
        state.getAllAllotmentTipsData = action.payload;
      })
      .addCase(getAllAllotmentTips.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default allotmentTipsSlice.reducer;
