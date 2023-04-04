import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

var initialState = {
  profile_shops: {},
  status: null,
};

var initdata = "";

export const shops_ = createAsyncThunk("profile/shops", async (data) => {
  try {
    await axios
      .post("https://server.shopex.io/profile/shops.php", data, {
        withCredentials: true,
      })
      .then(
        (response) => {
          initdata = response.data;
          //console.log(initdata);
        },
        (error) => {}
      );
    return initdata;
  } catch (err) {
    return err;
  }
});

export const Profile_shops_Slice = createSlice({
  name: "Profile_shops",

  initialState,

  reducers: {},

  extraReducers: {
    [shops_.pending]: (state, action) => {
      state.status = "loading";
    },
    [shops_.fulfilled]: (state, action) => {
      state.status = "success";
      if (action.payload !== null) {
        state.profile_shops = action.payload.shops;
      }
    },
    [shops_.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
