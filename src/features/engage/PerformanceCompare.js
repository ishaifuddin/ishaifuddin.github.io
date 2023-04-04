import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

var initialState = {
  autoList: {},
  status: null,
};

var initdata = "";
export const get_all_engage_automation_performance = createAsyncThunk(
  "engage/compare",
  async (data) => {
    try {
      await axios
        .post("https://server.shopex.io/engage/engage_perform.php", data, {
          withCredentials: true,
        })
        .then(
          (response) => {
            initdata = response.data;
          },
          (error) => {}
        );
      return initdata;
    } catch (err) {
      return err;
    }
  }
);

export const engage_Slice = createSlice({
  name: "engage",
  initialState,
  reducers: {},

  extraReducers: {
    [get_all_engage_automation_performance.pending]: (state, action) => {
      state.status = "loading";
    },
    [get_all_engage_automation_performance.fulfilled]: (state, action) => {
      state.status = "success";
      state.autoList = action.payload.autoList;
    },
    [get_all_engage_automation_performance.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
