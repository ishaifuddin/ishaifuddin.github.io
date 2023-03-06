import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"; 
    
    var initialState = { 
        list:{}, 
        segs:{}, 
        cus:"", 
        rev:"", 
        order:"", 
        profit:"" , 
        status: null 
    };

    var initdata = ""; 
    export const get_cusList_data = createAsyncThunk(
        "cus/dList", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/customers/cus_default_list.php',data,{withCredentials: true})
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
    
    
    export const get_cusfilter_List_data = createAsyncThunk(
        "cus/ListAndSeg", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/customers/cus_segment_filter_form.php',data,{withCredentials: true}) 
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


    export const get_cussegs_List = createAsyncThunk(
        "cus/segList", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/customers/cus_segments.php',data,{withCredentials: true}) 
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
        "cus/selsegList", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/customers/cus_show_selected_segment.php',data,{withCredentials: true}) 
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
       
    
    export const CusListAndSegsSlice = createSlice({ 
        name: "cusListAndSegs", 
        initialState, 
        reducers:{}, 
        extraReducers: { 
            
            [get_cusList_data.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_cusList_data.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    
                    state.list   = action.payload.cuslist; 
                    state.cus    = action.payload.total_cus; 
                    state.rev    = action.payload.total_revenue; 
                    state.order  = action.payload.total_order; 
                    state.profit = action.payload.total_profit; 
                } 
                
            }, 
            [get_cusList_data.rejected]: (state, action) => { 
                state.status = "failed"; 
            },
            
            
            [get_cusfilter_List_data.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_cusfilter_List_data.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    state.list   = action.payload.cuslist; 
                    state.cus    = action.payload.total_cus; 
                    state.rev    = action.payload.total_revenue; 
                    state.order  = action.payload.total_order; 
                    state.profit = action.payload.total_profit; 
                } 
                
            }, 
            [get_cusfilter_List_data.rejected]: (state, action) => { 
                state.status = "failed"; 
            },
            
            
            [get_cussegs_List.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_cussegs_List.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    state.segs   = action.payload.segs; 
                } 
            }, 
            [get_cussegs_List.rejected]: (state, action) => { 
                state.status = "failed"; 
            },


            [get_selseg_List.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_selseg_List.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    state.list = action.payload.cuslist; 
                } 
            }, 
            [get_selseg_List.rejected]: (state, action) => { 
                state.status = "failed"; 
            },
        }, 
    });