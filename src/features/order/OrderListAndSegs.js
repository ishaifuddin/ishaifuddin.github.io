import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"; 
    
    var initialState = { 
        olist:{}, 
        osegs:{}, 
        ocus:"", 
        orev:"", 
        order:"", 
        oprofit:"", 
        status: null 
    };

    var initdata = ""; 
    export const get_order_List = createAsyncThunk(
        "order/defList", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/orders/order_table.php',data,{withCredentials: true}) 
                .then((response) => { 
                    initdata = response.data; 
                    //console.log(initdata); 
                }, (error) => {}); 
                return initdata; 
            } catch (err) { 
                return (err) 
            } 
        }
    );
    
    
    export const get_order_filtered_List = createAsyncThunk(
        "order/filtList", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/orders/order_table.php',data,{withCredentials: true})  
                .then((response) => { 
                    initdata = response.data; 
                    //console.log(initdata); 
                }, (error) => {}); 
                return initdata; 
            } catch (err) { 
                return (err) 
            } 
        }
    );


    export const get_order_segs = createAsyncThunk(
        "order/segsList", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/orders/order_segments.php',data,{withCredentials: true})  
                .then((response) => { 
                    initdata = response.data; 
                    //console.log(initdata); 
                }, (error) => {}); 
                return initdata; 
            } catch (err) { 
                return (err) 
            } 
        }
    );


    
    export const get_selseg_List = createAsyncThunk(
        "order/sel_segList", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/orders/order_show_segment.php',data,{withCredentials: true}) 
                .then((response) => { 
                    initdata = response.data; 
                    //console.log(initdata); 
                }, (error) => {}); 
                return initdata; 
            } catch (err) { 
                return (err) 
            } 
        }
    );
       

    //OrderListAnd_Segs
    //OrderListAndSegsSlice
    export const Order_List_And_Seg_Slice = createSlice({ 
        name: "order_List_And_Segs", 
        initialState, 
        reducers:{}, 
        extraReducers: { 
            
            [get_order_List.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_order_List.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    //console.log(new Date().getTime());     
                    //if(state.olseg){
                    state.olist = action.payload.table; 
                    //}
                    
                } 
            }, 
            [get_order_List.rejected]: (state, action) => { 
                state.status = "failed"; 
            },
            
            
            
            [get_order_filtered_List.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_order_filtered_List.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    state.olist = action.payload.table; 
                } 
                
            }, 
            [get_order_filtered_List.rejected]: (state, action) => { 
                state.status = "failed"; 
            },
            

            
            [get_order_segs.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_order_segs.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    state.osegs = action.payload.segs; 
                } 
            }, 
            [get_order_segs.rejected]: (state, action) => { 
                state.status = "failed"; 
            },



            [get_selseg_List.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_selseg_List.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    state.olist = action.payload.table; 
                } 
            }, 
            [get_selseg_List.rejected]: (state, action) => { 
                state.status = "failed"; 
            },

        }, 
    });