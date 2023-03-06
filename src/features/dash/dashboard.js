import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

    var initialState = { 
        
        corp_chart:{ 
            
            cus_l:"", 
            cus_d:"", 
            or_l :"", 
            or_d:"", 

            rev_l:"", 
            rev_d:"", 

            prof_l:"",
            prof_d:"",

            cus_note:"",
            rev_note:"",
            order_note:"",
            profit_note:""
        },

        rsale : { 
            rsd:"",
            tpbu:"", 
            tpbr:"", 
            tpbp:"", 
            tcbu:"", 
            tcbr:"", 
            tcbp:""
        } ,
        status: null
    }

    
    var initdata = "";
    export const get_init_data = createAsyncThunk(
    "dash/initdata",
    async (data) => {
        try {
        await axios.post('https://server.shopex.io/dashboard/dash_charts_table.php',data,{withCredentials: true})
            .then((response) => {
                initdata = response.data;
                //console.log(initdata);
            }, (error) => {
            });
        
        return initdata; 

        } catch (err) {
        return (err)
        }
    });


    var rsdata = "";
    export const get_recent_sales = createAsyncThunk(
    "dash_rs/initdata",
    async (data) => {
        try {
        await axios.post('https://server.shopex.io/dashboard/dash_recent_sales.php',data,{withCredentials: true})
            .then((response) => {
                rsdata = response.data;
                //console.log(response.data);
            }, (error) => {
            });
        
        return rsdata; 

        } catch (err) {
        return (err)
        }
    });

    
    export const dashSlice = createSlice({
    
        name: "dash",
        //initialState: {
            //users:{ name : "", email: "", password: "" },
        //    initial_state
        //},
        initialState,
        reducers:{},
    
        extraReducers: {

            [get_init_data.pending]: (state, action) => {
                state.status = "loading";
            },
            [get_init_data.fulfilled]: (state, action) => {
        
                state.status = "success";

                if(action.payload !== null ) {

                    state.corp_chart.rev_d = action.payload.rev_data;
                    //var rdd = action.payload.rev_data;
                    //var rdd = rdd.replace(/\"/g, "");
                    //var rev_data = rdd.split(",");
                    //state.corp_chart.rev_d = rev_data;

                    
                    state.corp_chart.prof_d = action.payload.profit_data;
                    //var pro_d     = action.payload.profit_data;
                    //var rdd       = pro_d.replace(/\"/g, "");
                    //var prof_data = rdd.split(",");
                    //state.corp_chart.prof_d = prof_data;

                    
                    state.corp_chart.cus_d = action.payload.cus_data;
                    //var cus_d    = action.payload.cus_data;
                    //var rdd      = cus_d.replace(/\"/g, "");
                    //var cus_data = rdd.split(",");
                    //state.corp_chart.cus_d = cus_data;


                    state.corp_chart.or_l = action.payload.order_cus_label;
                    //var labels = action.payload.order_cus_label;
                    //var labels = labels.replace(/\"/g, "");
                    //var labels = labels.split(",");
                    //state.corp_chart.or_l = labels;
                    
                    
                    state.corp_chart.or_d = action.payload.order_data;
                    //var or_d    = action.payload.order_data;
                    //var rdd     = or_d.replace(/\"/g, "");
                    //var or_data = rdd.split(",");
                    //state.corp_chart.or_d = or_data;

                    state.corp_chart.cus_note    = action.payload.cus_note;
                    state.corp_chart.rev_note    = action.payload.rev_note;
                    state.corp_chart.order_note  = action.payload.onote;
                    state.corp_chart.profit_note = action.payload.profit_note;

                }
                //window.location.href="/dashboard";
            },
            [get_init_data.rejected]: (state, action) => {
                state.status = "failed";
            },



            
            [get_recent_sales.pending]: (state, action) => {
                state.status = "loading";
            },
            [get_recent_sales.fulfilled]: (state, action) => {
                state.status = "success";
                //localStorage.setItem("authenticated", true);
                state.rsale.rsd = action.payload.recent_sales;
            },
            [get_recent_sales.rejected]: (state, action) => {
                state.status = "failed";
            },
        },
    });

    