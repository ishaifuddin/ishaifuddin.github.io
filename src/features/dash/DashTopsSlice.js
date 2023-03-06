import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

    

    var initialState = { 
        tops : { tpbu:"", tpbr:"", tpbp:"", tcbu:"", tcbr:"", tcbp:"" },
        l30 : { tmnew:"", tmnew_note:"", tmret:"", tmret_note:"" },
        weekday : { day:"", day_on:"", day_oa:"" },
        status: null
    }

    var topsdata = "";
    export const get_tops = createAsyncThunk(
    "dash_tops/initdata",
    async () => {
        try {
        await axios.post('https://server.shopex.io/dashboard/dash_query.php',{},{withCredentials: true})
            .then((response) => {
                topsdata = response.data;
                //console.log(response.data);
            }, (error) => {
            });
            return topsdata; 
        } catch (err) {
            return (err)
        }
    });

    
    
    export const dashTopsSlice = createSlice({
    
        name: "dashTops",
        //initialState: {
            //users:{ name : "", email: "", password: "" },
        //    initial_state
        //},
        initialState,
        reducers:{},
    
        extraReducers: {

            // get_tops
            [get_tops.pending]: (state, action) => {
                state.status = "loading";
            },
            [get_tops.fulfilled]: (state, action) => {
                
                state.status = "success";
                //console.log("action.payload");
                //console.log(action.payload);
                //console.log("state.tops value");
                state.tops.tpbu = action.payload.tpbu;
                state.tops.tpbr = action.payload.tpbr;
                state.tops.tpbp = action.payload.tpbp;
                state.tops.tcbu = action.payload.tcbu;
                state.tops.tcbr = action.payload.tcbr;
                state.tops.tcbp = action.payload.tcbp;

                state.l30.l30new      = action.payload.l30new;
                state.l30.l30new_note = action.payload.l30new_note;
                state.l30.l30ret      = action.payload.l30ret;
                state.l30.l30ret_note = action.payload.l30ret_note;

                state.weekday.day = action.payload.dayname;
                state.weekday.day_on = action.payload.day_total_order;
                state.weekday.day_oa = action.payload.day_total_amount;

               
                
            },
            [get_tops.rejected]: (state, action) => {
                state.status = "failed";
            },
            
            
        },
    });

    

    //export default dashSlice.reducer;
