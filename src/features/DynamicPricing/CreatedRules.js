import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"; 
    
    var initialState = { 
        CreatedRules :{}, 
        status: null 
    };

    var initdata = ""; 
    export const get_pricing_rule_List = createAsyncThunk(
        "rule/createdList", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/dynamicpricing/dpp_created_pricing_rules.php',data,{withCredentials: true}) 
                .then((response) => { 
                    initdata = response.data; 
                }, (error) => {}); 
                return initdata; 
            } catch (err) { 
                return (err) 
            } 
        }
    );
    
    
    export const pricing_rule_List_Slice = createSlice({ 
        name: "Pricing_rule_list", 
        initialState, 
        reducers:{}, 
        extraReducers: { 
            
            [get_pricing_rule_List.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_pricing_rule_List.fulfilled]: (state, action) => { 
                state.status = "success"; 
                state.CreatedRules = action.payload.created_rules; 
            }, 
            [get_pricing_rule_List.rejected]: (state, action) => { 
                state.status = "failed"; 
            },

        }, 
    });