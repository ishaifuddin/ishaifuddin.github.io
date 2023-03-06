import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"; 
    
    var initialState = { 
        personal_data:{},
        status: null 
    };


    var initdata = ""; 
    
    export const personaldata_ = createAsyncThunk(
        "profile/personal_data", 
        async (data) => { 
            try { 
                await axios.post('https://server.shopex.io/profile/personal_data.php',data,{withCredentials: true})
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
    
 

    export const Profile_personal_data_Slice = createSlice({ 
        
        name: "Profile_personal_data", 
        
        initialState, 
        
        reducers:{}, 
        
        extraReducers: { 
            
            [personaldata_.pending]: (state, action) => { 
                state.status = "loading"; }, 
            [personaldata_.fulfilled]: (state, action) => { 
                state.status = "success"; 
                if(action.payload !== null ) { 
                    state.personal_data = action.payload.personal_data; 
                } 
            }, 
            [personaldata_.rejected]: (state, action) => { 
                state.status = "failed"; 
            }
        }, 
    });