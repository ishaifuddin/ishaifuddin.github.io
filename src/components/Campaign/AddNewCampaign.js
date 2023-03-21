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
        <Grid className='campaign' container spacing={3}>
            <Grid item md={12}>
                <div className="notifications">
                    <h6>Campaign</h6>
                </div>
            </Grid>
            <Grid item md={12}>
                <form onSubmit={handleSubmit}>
                    <label sty>Insert Campaign source : </label> 
                    <input type="text" id="src_name"/><br/><br/>
                    <label> Insert Ad URL :  </label> 
                    <input type="text" id="addurl" /> 
                    <Button type="submit">Save</Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default AddNewCampaign