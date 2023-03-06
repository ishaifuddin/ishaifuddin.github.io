import { ReactSession }  from 'react-client-session';
import React, { useEffect,useState,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
//import { Grid } from '@mantine/core';
import Select from 'react-select';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import moment from 'moment';

function AddNewCampaign() {
    
    var handleSubmit = (event) => {
        event.preventDefault();
    }

    
    return (
        
        <Grid style={{margin:'3%'}}>

            <form onSubmit={handleSubmit} >
            
                <h4> Insert Campaign source  </h4> 
                <input type="text" id="src_name" style={{height:'50px',width:'300px',fontSize:'16px'}} />

                <h4> Insert Ad URL   </h4> 
                <input type="text" id="addurl" style={{height:'50px',width:'300px',fontSize:'16px'}} /> 
                
                <Button type="submit">Save</Button>
            
            </form>
            
        </Grid>
  )
}

export default AddNewCampaign