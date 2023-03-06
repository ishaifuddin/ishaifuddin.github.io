import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"; 
    
    var initialState = { 
        profile_plan:{},
        status: null 
    };


    var initdata = ""; 
    
    export const plan_ = createAsyncThunk(
        "profile/plan", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/profile/plan.php',data,{withCredentials: true})
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
    
 

    export const Profile_plan_Slice = createSlice({ 
        
        name: "Profile_plan", 
        initialState, 
        reducers:{}, 
        extraReducers: { 
            
            [plan_.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [plan_.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    state.profile_plan = action.payload.plan; 
                } 
            }, 
            [plan_.rejected]: (state, action) => { 
                state.status = "failed"; 
            }
        }, 
    });