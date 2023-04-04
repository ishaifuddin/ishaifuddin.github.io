import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

var initialState = {
  all_product_object: {},
  product_table_object: {},
  product_cat_table_object: {},
  all_product_cat_object: {},
  product_segments: {},
  product_sku: "",
  status: null,
};

var initdata = "";
export const get_product_and_catagory_and_sku_data = createAsyncThunk(
  "product/product_catagory_main_List",
  async (data) => {
    try {
      await axios
        .post("https://server.shopex.io/products/product_main_list.php", data, {
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
  }
);

export const get_filtered_product_data = createAsyncThunk(
  "product/filtered_product_List",
  async (data) => {
    try {
      await axios
        .post(
          "https://server.shopex.io/products/product_filter_form.php",
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

export const get_product_segments = createAsyncThunk(
  "product/segment_List",
  async (data) => {
    try {
      await axios
        .post("https://server.shopex.io/products/product_segments.php", data, {
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
  }
);

export const get_products_from_selected_segment = createAsyncThunk(
  "product/selected_segment_product",
  async (data) => {
    try {
      await axios
        .post(
          "https://server.shopex.io/products/product_show_segment.php ",
          data,
          { withCredentials: true }
        ) //
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

export const get_products_from_selected_catagory = createAsyncThunk(
  "product/selected_cat_product",
  async (data) => {
    try {
      await axios
        .post(
          "https://server.shopex.io/products/product_show_sincat.php ",
          data,
          { withCredentials: true }
        ) //
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

export const Product_List_And_Seg_Slice = createSlice({
  name: "product_List_And_Segments",

  initialState,

  reducers: {
    EditCost: (state, action) => {
      var id = action.payload.id;
      var cog = action.payload.cost;
      state.product_table_object = state.product_table_object.map((item) => {
        if (item.product_id === id) {
          return { ...item, cog };
        } else {
          return item;
        }
      });
    },
  },

  extraReducers: {
    [get_product_and_catagory_and_sku_data.pending]: (state, action) => {
      state.status = "loading";
    },
    [get_product_and_catagory_and_sku_data.fulfilled]: (state, action) => {
      state.status = "success";
      if (action.payload !== null) {
        state.all_product_object = action.payload.product_table_object;
        state.product_table_object = action.payload.product_table_object;
        state.product_cat_table_object = action.payload.catagory_table_object;
        state.product_sku = action.payload.sku;
      }
    },
    [get_product_and_catagory_and_sku_data.rejected]: (state, action) => {
      state.status = "failed";
    },

    [get_filtered_product_data.pending]: (state, action) => {
      state.status = "loading";
    },
    [get_filtered_product_data.fulfilled]: (state, action) => {
      state.status = "success";
      if (action.payload !== null) {
        state.product_table_object =
          action.payload.filtered_product_table_object;
      }
    },
    [get_filtered_product_data.rejected]: (state, action) => {
      state.status = "failed";
    },

    [get_product_segments.pending]: (state, action) => {
      state.status = "loading";
    },
    [get_product_segments.fulfilled]: (state, action) => {
      state.status = "success";
      if (action.payload !== null) {
        state.product_segments = action.payload.product_segments;
      }
    },
    [get_product_segments.rejected]: (state, action) => {
      state.status = "failed";
    },

    [get_products_from_selected_segment.pending]: (state, action) => {
      state.status = "loading";
    },
    [get_products_from_selected_segment.fulfilled]: (state, action) => {
      state.status = "success";
      if (action.payload !== null) {
        state.product_table_object =
          action.payload.products_table_object_from_a_segment;
      }
    },
    [get_products_from_selected_segment.rejected]: (state, action) => {
      state.status = "failed";
    },

    [get_products_from_selected_catagory.pending]: (state, action) => {
      state.status = "loading";
    },
    [get_products_from_selected_catagory.fulfilled]: (state, action) => {
      state.status = "success";
      if (action.payload !== null) {
        state.product_table_object = action.payload.table;
      }
    },
    [get_products_from_selected_catagory.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { EditCost } = Product_List_And_Seg_Slice.actions;
