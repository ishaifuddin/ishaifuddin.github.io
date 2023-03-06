import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"; 
    
    var initialState = { 
        Allorder :{}, 
        orderGroupByCamSrc :{}, 
        status: null 
    };

    var initdata = ""; 
    export const get_all_orders_from_campaign = createAsyncThunk(
        "campaign/AllOrderList", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/campaign/campaign.php',data,{withCredentials: true}) 
                .then((response) => { 
                    initdata = response.data; 
                }, (error) => {}); 
                return initdata; 
            } catch (err) { 
                return (err) 
            } 
        }
    );

    
    var initdata1 = ""; 
    export const get_all_orders_group_by_campaign = createAsyncThunk(
        "campaign/OrderGroupByCampaignSource", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/campaign/campaign.php',data,{withCredentials: true}) 
                .then((response) => { 
                    initdata1 = response.data; 
                }, (error) => {}); 
                return initdata1; 
            } catch (err) { 
                return (err) 
            } 
        }
    );
    
    
    export const campaign_Slice = createSlice({ 
        
        name: "campaign", 
        initialState, 
        reducers:{}, 
        
        extraReducers: { 
            
            [get_all_orders_from_campaign.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_all_orders_from_campaign.fulfilled]: (state, action) => { 
                state.status = "success"; 
                state.Allorder = action.payload.camoaign_order_list; 
            }, 
            [get_all_orders_from_campaign.rejected]: (state, action) => { 
                state.status = "failed"; 
            },


            [get_all_orders_group_by_campaign.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_all_orders_group_by_campaign.fulfilled]: (state, action) => { 
                state.status = "success"; 
                state.orderGroupByCamSrc = action.payload.group_by_src; 
            }, 
            [get_all_orders_group_by_campaign.rejected]: (state, action) => { 
                state.status = "failed"; 
            },

        }, 

    });