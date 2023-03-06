import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
    
    var initialState = { 
        retcus_obj:{},
        newcus_obj:{},
        status: null
    }
    
    var initdata = "";
    export const get_custm_data = createAsyncThunk(
    "cus/tmdata",
    async (data) => {
        try {
        await axios.post('https://server.shopex.io/customers/customers_from_this_month.php',data,{withCredentials: true})
            .then((response) => {
                initdata = response.data;
                //console.log(initdata);
            }, (error) => {});
        
            return initdata; 

        } catch (err) {
            return (err)
        }
    });

    
    export const TMSlice = createSlice({
        name: "cusTM",
        initialState,
        reducers:{},
        extraReducers: {
            [get_custm_data.pending]: (state, action) => {
                state.status = "loading";
            },
            [get_custm_data.fulfilled]: (state, action) => {
                state.status = "success";
                if(action.payload !== null ) {
                    state.newcus_obj   = action.payload.newcus_obj;
                    state.retcus_obj   = action.payload.retcus_obj;

                }
                //window.location.href="/dashboard";
            },
            [get_custm_data.rejected]: (state, action) => {
                state.status = "failed";
            },
        },
    });

    