import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

var initialState = {
  profile_team: {},
  status: null,
};

var initdata = "";

export const team_ = createAsyncThunk("profile/team", async (data) => {
  try {
    await axios
      .post("https://server.shopex.io/profile/team.php", data, {
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

export const Profile_team_Slice = createSlice({
  name: "Profile_team",
  initialState,
  reducers: {},

  extraReducers: {
    [team_.pending]: (state, action) => {
      state.status = "loading";
    },
    [team_.fulfilled]: (state, action) => {
      state.status = "success";
      if (action.payload !== null) {
        state.profile_team = action.payload.team;
      }
    },
    [team_.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
