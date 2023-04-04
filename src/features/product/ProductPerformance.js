import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

var initialState = {
  comparison_table__object: {},
  unit_comparison: {},
  rev_comparison: {},
  cus_comparison: {},
  rcus_comparison: {},
  order_comparison: {},
  profit_comparison: {},
  comparison_chart_base_label: {},

  status: null,
};

var initdata = "";

export const get_performance_data = createAsyncThunk(
  "product/performance_object",
  async (data) => {
    try {
      await axios
        .post(
          "https://server.shopex.io/products/product_perform_comparison.php",
          data,
          { withCredentials: true }
        )
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
  }
);

export const Product_performance_single_and_mutiple_Slice = createSlice({
  name: "Product_performance",

  initialState,

  reducers: {},

  extraReducers: {
    [get_performance_data.pending]: (state, action) => {
      state.status = "loading";
    },

    [get_performance_data.fulfilled]: (state, action) => {
      state.status = "success";
      if (action.payload !== null) {
        state.comparison_table__object = action.payload.table;

        state.comparison_chart_base_label = action.payload.label
          .replace(/\"/g, "")
          .split(",");

        //// Charts ////

        var unit_object = action.payload.unit;
        var arr = [];
        for (const property in unit_object) {
          var l = `${property}`;
          var d = `${unit_object[property]}`;
          var line_color =
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
          var res = d.split(",");

          arr.push({
            label: l,
            fill: false,
            spanGaps: false,
            borderWidth: 1.5,
            pointRadius: 5.5,
            pointHoverRadius: 8,
            borderColor: line_color,
            pointHitRadius: 10,
            pointStyle: "circle",
            lineTension: 0.5,
            pointBorderWidth: 4,
            pointBackgroundColor: "rgba(255,150,0,0.5)",
            pointRotation: 5,
            data: res,
          });
        }
        state.unit_comparison = arr;

        var rev_object = action.payload.revenue;
        var arr = [];
        for (const property in rev_object) {
          var l = `${property}`;
          var d = `${rev_object[property]}`;
          var line_color =
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
          var res = d.split(",");

          arr.push({
            label: l,
            fill: false,
            spanGaps: false,
            borderWidth: 1.5,
            pointRadius: 5.5,
            pointHoverRadius: 8,
            borderColor: line_color,
            pointHitRadius: 10,
            pointStyle: "circle",
            lineTension: 0.5,
            pointBorderWidth: 4,
            pointBackgroundColor: "rgba(255,150,0,0.5)",
            pointRotation: 5,
            data: res,
          });
        }
        state.rev_comparison = arr;

        var cus_object = action.payload.customer;
        var arr = [];
        for (const property in cus_object) {
          var l = `${property}`;
          var d = `${cus_object[property]}`;
          var line_color =
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
          var res = d.split(",");

          arr.push({
            label: l,
            fill: false,
            spanGaps: false,
            borderWidth: 1.5,
            pointRadius: 5.5,
            pointHoverRadius: 8,
            borderColor: line_color,
            pointHitRadius: 10,
            pointStyle: "circle",
            lineTension: 0.5,
            pointBorderWidth: 4,
            pointBackgroundColor: "rgba(255,150,0,0.5)",
            pointRotation: 5,
            data: res,
          });
        }
        state.cus_comparison = arr;

        var rcus_object = action.payload.rcustomer;
        var arr = [];
        for (const property in rcus_object) {
          var l = `${property}`;
          var d = `${rcus_object[property]}`;
          var line_color =
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
          var res = d.split(",");

          arr.push({
            label: l,
            fill: false,
            spanGaps: false,
            borderWidth: 1.5,
            pointRadius: 5.5,
            pointHoverRadius: 8,
            borderColor: line_color,
            pointHitRadius: 10,
            pointStyle: "circle",
            lineTension: 0.5,
            pointBorderWidth: 4,
            pointBackgroundColor: "rgba(255,150,0,0.5)",
            pointRotation: 5,
            data: res,
          });
        }
        state.rcus_comparison = arr;

        var order_object = action.payload.order;
        var arr = [];
        for (const property in order_object) {
          var l = `${property}`;
          var d = `${order_object[property]}`;
          var line_color =
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
          var res = d.split(",");

          arr.push({
            label: l,
            fill: false,
            spanGaps: false,
            borderWidth: 1.5,
            pointRadius: 5.5,
            pointHoverRadius: 8,
            borderColor: line_color,
            pointHitRadius: 10,
            pointStyle: "circle",
            lineTension: 0.5,
            pointBorderWidth: 4,
            pointBackgroundColor: "rgba(255,150,0,0.5)",
            pointRotation: 5,
            data: res,
          });
        }
        state.order_comparison = arr;

        var profit_object = action.payload.profit;
        var arr = [];
        for (const property in profit_object) {
          var l = `${property}`;
          var d = `${profit_object[property]}`;
          var line_color =
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
          var res = d.split(",");

          arr.push({
            label: l,
            fill: false,
            spanGaps: false,
            borderWidth: 1.5,
            pointRadius: 5.5,
            pointHoverRadius: 8,
            borderColor: line_color,
            pointHitRadius: 10,
            pointStyle: "circle",
            lineTension: 0.5,
            pointBorderWidth: 4,
            pointBackgroundColor: "rgba(255,150,0,0.5)",
            pointRotation: 5,
            data: res,
          });
        }
        state.profit_comparison = arr;
      }
    },

    [get_performance_data.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
