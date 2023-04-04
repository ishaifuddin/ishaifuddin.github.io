import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

var initialState = {
  Product_Purchase_Based_Cus_List_Obj: {},
  Product_Purchase_Based_Cus_Segment_Obj: {},
  status: null,
};

//Product_Purchase_Based_Cus_Segment_Obj
var initdata = "";

export const Get_Product_Purchase_Based_Cus_List_Obj = createAsyncThunk(
  "product/Purchase_buy_based_customer_list",
  async (data) => {
    try {
      await axios
        .post(
          "https://server.shopex.io/products/product_selected_cuseg.php",
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

var initdata1 = "";

export const Get_Product_Purchase_Based_Cus_Seg_Obj = createAsyncThunk(
  "product/Purchase_buy_based_customer_segment",
  async (data) => {
    try {
      await axios
        .post(
          "https://server.shopex.io/products/product_purchase_based_cus_segment_list.php",
          data,
          { withCredentials: true }
        )
        .then(
          (response) => {
            initdata1 = response.data;
            //console.log(initdata);
          },
          (error) => {}
        );
      return initdata1;
    } catch (err) {
      return err;
    }
  }
);

export const Product_Purchase_Based_Customer_List_and_Segment_Slice =
  createSlice({
    name: "Product_Purchase_Based_Customer_List_and_Segment",

    initialState,

    reducers: {
      removeCuslist(state, action) {
        state.Product_Purchase_Based_Cus_List_Obj = null;
      },
      // createPost(state, action) {},
      // createPost(state, action) {},
      // createPost(state, action) {}
    },

    extraReducers: {
      [Get_Product_Purchase_Based_Cus_List_Obj.pending]: (state, action) => {
        state.status = "loading";
      },
      [Get_Product_Purchase_Based_Cus_List_Obj.fulfilled]: (state, action) => {
        state.status = "success";
        if (action.payload !== null) {
          state.Product_Purchase_Based_Cus_List_Obj = action.payload.table;
          //echo json_encode(array("table"=>$table,'cus'=>$total_cus,'rev'=>$total_rev,'sname'=>$sname));
        }
      },
      [Get_Product_Purchase_Based_Cus_List_Obj.rejected]: (state, action) => {
        state.status = "failed";
      },

      [Get_Product_Purchase_Based_Cus_Seg_Obj.pending]: (state, action) => {
        state.status = "loading";
      },
      [Get_Product_Purchase_Based_Cus_Seg_Obj.fulfilled]: (state, action) => {
        state.status = "success";
        //if(action.payload !== null ) {

        state.Product_Purchase_Based_Cus_Segment_Obj = action.payload.segs;
        //console.log(state.Product_Purchase_Based_Cus_Segment_Obj);
        //}
      },
      [Get_Product_Purchase_Based_Cus_Seg_Obj.rejected]: (state, action) => {
        state.status = "failed";
      },
    },
  });

//export const { removeCuslist } = Product_Purchase_Based_Customer_List_and_Segment_Slice.actions
