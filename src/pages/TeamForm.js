import { ReactSession }  from 'react-client-session';

import React, { useEffect, useState, useRef } from "react";
import {useNavigate} from 'react-router-dom'; 
import { useSelector, useDispatch } from "react-redux";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Grid from "@mui/material/Grid";
import axios from 'axios';

import Cookies from 'js-cookie'

function TeamForm() {


    const navigate = useNavigate(); 
    const navigateRef = useRef(navigate); 
    var[flag,setflag] = useState(false);

    var TeamFormSubmit = (event) => {

        event.preventDefault();
        
        const fdata = new FormData(event.target);
        const data = Object.fromEntries(fdata.entries());

        axios.post('https://server.shopex.io/profile/profile_member_form_process.php',data,{withCredentials: true})
        .then(function (response) {
            
            if (response.data === 'success' ) {
                navigateRef.current('/');
            }else if(response.data === 'Not'){
                alert("No Invitetion Sent to you");
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    return (
    
        <Grid container>

            <form onSubmit={TeamFormSubmit} style={{marginLeft: '40%'}}>

                <Grid item sm={10} style={{display: 'grid'}}>

                    <h4>Sign-up</h4>

                    <strong>Name</strong>
                    <input type="text" name="name" required placeholder=""/>

                    <strong> Enter the Email address invitation sent to </strong>
                    <input type="email" name="email" required placeholder=""/>
                    
                    <strong>Password</strong>
                    <input type="password"  name="pcode" required />

                    <button type="submit">Submit</button>
                   
                   { flag && <h3> Invalid Credentials </h3> }
                
                </Grid>

            </form>

        </Grid>
    
    )
}

export default TeamForm