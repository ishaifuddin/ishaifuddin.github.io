import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
    
    var initialState = { 

        // get_OrderLocCT_data //
        shipcity_order:"", 
        shipcity_revenue:"", 
        label:"",

        shipcity_table:{}, 
        shipstate_table:{},
        
        billcity_table:{}, 
        billstate_table:{},

        // Group By paymeth table
        group_by_paymeth:{},

        // Group By Status
        group_by_status:{},

        //get_OrderAndRev_data//

        //  TOT Cus Order Number
        to_or_num_label:"", to_or_num_data:"", total_order_note:"",
                         
        //  TOT Cus Order Rev
        to_or_rev_label:"", to_or_rev_data:"", total_rev_note:"",
        
        //  NEW Cus Order Number
        new_or_num_label:"", new_or_num_data:"", new_order_note:"",
        
        //  NEW Cus Order Rev
        new_or_rev_label:"", new_or_rev_data:"", new_rev_note:"",
                        
        //  RET Cus Order Number
        ret_or_num_label:"", ret_or_num_data:"", repeat_order_note:"",
        
        //  RET Cus Order Rev
        ret_or_rev_label:"", ret_or_rev_data:"", repeat_rev_note:"",
        
        //  Payment method Order Rev
        paymeth_rev_label:"", paymeth_rev_data:"",
        
        //  Payment method Order Number
        paymeth_or_num_label:"", paymeth_or_num_data:"",
        
        // Weekday Order Rev
        week_day_rev_label:"", week_day_rev_data:"",
        
        // Weekday Order Number
        week_day_or_num_label:"",week_day_or_num_data:"",
        
        status: null

    }

    
    var initdata = "";
    export const get_OrderAndRev_data = createAsyncThunk(
    "order/OrderAndRevdata",
    async (data) => {
        try {
        await axios.post('https://server.shopex.io/orders/order_charts.php',data,{withCredentials: true})
            .then((response) => {
                initdata = response.data;
                //console.log(initdata);
            }, (error) => {});
        
            return initdata; 

        } catch (err) {
            return (err)
        }
    });

    
    var initdata = "";
    export const get_OrderLocCT_data = createAsyncThunk(
    "order/LocCTdata",
    async (data) => {
        try {
        await axios.post('https://server.shopex.io/orders/order_num_rev_chart.php',data,{withCredentials: true})
            .then((response) => {
                initdata = response.data;
                //console.log(initdata);
            }, (error) => {});
        
            return initdata; 

        } catch (err) {
            return (err)
        }
    });

    
    export const Order_numrev_LocChartTable_Slice = createSlice({
        name: "order_numrev_shipLoc_ChartTable",
        initialState,
        reducers:{},
        extraReducers: {
            [get_OrderLocCT_data.pending]: (state, action) => {
                state.status = "loading";
            },
            [get_OrderLocCT_data.fulfilled]: (state, action) => {
                state.status = "success";
                if(action.payload !== null ) {
                    
                    //// Charts ////
                    var shipcity_order = action.payload.order_number_data;
                    var arr=[];
                    for (const property in shipcity_order) {
                        var l = `${property}`;
                        var d = `${shipcity_order[property]}`;
                        var line_color =  '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
                        var res = d.split(",");
                        
                        arr.push({
                            label: l,
                            fill: false,
                            spanGaps: false,
                            borderWidth:1.5,
                            pointRadius:5.5,  
                            pointHoverRadius: 8, 
                            borderColor:line_color, 
                            pointHitRadius: 10,
                            pointStyle: 'circle', 
                            lineTension: 0.5,
                            pointBorderWidth: 4,
                            pointBackgroundColor: 'rgba(255,150,0,0.5)',
                            pointRotation:5,
                            data: res
                        });
                    }
                    state.shipcity_order = arr;
                    

                    var shipcity_rev = action.payload.order_amount_data;
                    var arr=[];
                    for (const property in shipcity_rev) {
                        var l = `${property}`;
                        var d = `${shipcity_rev[property]}`;
                        var line_color =  '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
                        var res = d.split(",");
                        
                        arr.push({
                            label: l,
                            fill: false,
                            spanGaps: false,
                            borderWidth:1.5,
                            pointRadius:5.5,  
                            pointHoverRadius: 8, 
                            borderColor:line_color, 
                            pointHitRadius: 10,
                            pointStyle: 'circle', 
                            lineTension: 0.5,
                            pointBorderWidth: 4,
                            pointBackgroundColor: 'rgba(255,150,0,0.5)',
                            pointRotation:5,
                            data: res
                        });
                    }
                    state.shipcity_revenue = arr;

                    state.label = action.payload.order_number_label.replace(/\"/g, "").split(",");
                    
                    
                   


                    state.group_by_status   = action.payload.os_table;
                    state.group_by_paymeth  = action.payload.pm_table;
                    
                }

                //window.location.href="/dashboard";
            
            },

            [get_OrderLocCT_data.rejected]: (state, action) => {
                state.status = "failed";
            },


            
            [get_OrderAndRev_data.pending]: (state, action) => {
                state.status = "loading";
            },

            [get_OrderAndRev_data.fulfilled]: (state, action) => {
                
                if(action.payload !== null ) {

                    //console.log(action.payload);

                    state.status = "success";
            
                    if (action.payload.ton_label) { 
                        state.to_or_num_label   = action.payload.ton_label.replace(/\"/g, "").split(",");
                        state.to_or_num_data    = action.payload.ton_data.replace(/\"/g, "").split(",");
                        state.total_order_note  = action.payload.ton_n;
                    }

                    if (action.payload.toa_label) { 
                        state.to_or_rev_label = action.payload.toa_label.replace(/\"/g, "").split(",");
                        state.to_or_rev_data  = action.payload.toa_data.replace(/\"/g, "").split(",");
                        state.total_rev_note  = action.payload.toa_n;
                    }

                    if (action.payload.non_label) { 
                        state.new_or_num_label = action.payload.non_label.replace(/\"/g, "").split(",");
                        state.new_or_num_data  = action.payload.non_data.replace(/\"/g, "").split(",");
                        state.new_order_note   = action.payload.non_n;
                    }

                    if (action.payload.noa_label) { 
                        state.new_or_rev_label = action.payload.noa_label.replace(/\"/g, "").split(",");
                        state.new_or_rev_data  = action.payload.noa_data.replace(/\"/g, "").split(",");
                        state.new_rev_note     = action.payload.noa_n;
                    }

                    if (action.payload.ron_label) { 
                        state.ret_or_num_label   = action.payload.ron_label.replace(/\"/g, "").split(",");
                        state.ret_or_num_data    = action.payload.ron_data.replace(/\"/g, "").split(",");
                        state.repeat_order_note  = action.payload.ron_n;
                    }

                    if (action.payload.roa_label) { 
                        state.ret_or_rev_label = action.payload.roa_label.replace(/\"/g, "").split(",");
                        state.ret_or_rev_data  = action.payload.roa_data.replace(/\"/g, "").split(",");
                        state.repeat_rev_note  = action.payload.roa_n;
                    }

                    if (action.payload.pmoa_label) { 
                        state.paymeth_rev_label = action.payload.pmoa_label.replace(/\"/g, "").split(",");
                        state.paymeth_rev_data  = action.payload.pmoa_data.replace(/\"/g, "").split(",");
                    }


                    if (action.payload.pmon_label) { 
                        state.paymeth_or_num_label = action.payload.pmon_label.replace(/\"/g, "").split(",");
                        state.paymeth_or_num_data  = action.payload.pmon_data.replace(/\"/g, "").split(",");
                    }

                    if (action.payload.wdoa_label) { 
                        state.week_day_rev_label = action.payload.wdoa_label.replace(/\"/g, "").split(",");
                        state.week_day_rev_data  = action.payload.wdoa_data.replace(/\"/g, "").split(",");
                    }

                    if (action.payload.wdon_label) { 
                        state.week_day_or_num_label = action.payload.wdon_label.replace(/\"/g, "").split(",");
                        state.week_day_or_num_data  = action.payload.wdon_data.replace(/\"/g, "").split(",");
                    }


                    //// Tables ////
                    state.shipstate_table  = action.payload.table_ship_state;
                    state.shipcity_table   = action.payload.table_ship_city;

                    state.billstate_table  = action.payload.table_bill_state;
                    state.billcity_table   = action.payload.table_bill_city;
                }
                

            },

            [get_OrderAndRev_data.rejected]: (state, action) => {
                state.status = "failed";
            },

        },
    });

    