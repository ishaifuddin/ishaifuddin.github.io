import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"; 
    
    var initialState = { 
        
        segment_comparison_table_object:{},

        segment_unit_comparison:{},
        segment_rev_comparison:{},
        segment_cus_comparison:{},
        segment_rcus_comparison:{},
        segment_order_comparison:{},
        segment_profit_comparison:{},

        segment_comparison_chart_base_label:"",

        status: null 
    };


    var initdata = ""; 
    
    export const get_product_segments_data = createAsyncThunk(
        "product/segment_performance", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/products/product_seg_report.php',data,{withCredentials: true}) 
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
    
 

    export const Product_segments_Slice = createSlice({ 
        
        name: "Product_segments", 
        
        initialState, 
        
        reducers:{}, 
        
        extraReducers: { 
            
            [get_product_segments_data.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [get_product_segments_data.fulfilled]: (state, action) => { 
                
                state.status = "success"; 
                
                if(action.payload !== null ) { 
                    
                    //// Charts ////
                    
                    state.segment_comparison_chart_base_label = action.payload.label.replace(/\"/g, "").split(",");
                    state.segment_comparison_table_object = action.payload.table;


                    var unit_object = action.payload.unit;
                    var arr=[];
                    for (const property in unit_object) {
                        var l = `${property}`;
                        var d = `${unit_object[property]}`;
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
                    state.segment_unit_comparison = arr;
                    

                    var rev_object = action.payload.revenue;
                    var arr=[];
                    for (const property in rev_object) {
                        var l = `${property}`;
                        var d = `${rev_object[property]}`;
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
                    state.segment_rev_comparison = arr;


                    var cus_object = action.payload.customer;
                    var arr=[];
                    for (const property in cus_object) {
                        var l = `${property}`;
                        var d = `${cus_object[property]}`;
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
                    state.segment_cus_comparison = arr;


                    var rcus_object = action.payload.rcustomer;
                    var arr=[];
                    for (const property in rcus_object) {
                        var l = `${property}`;
                        var d = `${rcus_object[property]}`;
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
                    state.segment_rcus_comparison = arr;


                    var order_object = action.payload.order;
                    var arr=[];
                    for (const property in order_object) {
                        var l = `${property}`;
                        var d = `${order_object[property]}`;
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
                    state.segment_order_comparison = arr;

                    var profit_object = action.payload.profit;
                    var arr=[];
                    for (const property in profit_object) {
                        var l = `${property}`;
                        var d = `${profit_object[property]}`;
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
                    state.segment_profit_comparison = arr;
                } 
            }, 
            [get_product_segments_data.rejected]: (state, action) => { 
                state.status = "failed"; 
            }
        }, 
    });