import { ReactSession }  from 'react-client-session';
import React, {  useState, useRef } from "react";
import {useNavigate} from 'react-router-dom'; 
import Grid from "@mui/material/Grid";
import axios from 'axios';
function Login() {


    const navigate = useNavigate(); 
    const navigateRef = useRef(navigate); 
    var[flag,setflag] = useState(false);

    var loginSubmit = (event) => {

        event.preventDefault();
        
        const fdata = new FormData(event.target);
        const data = Object.fromEntries(fdata.entries());

        axios.post('https://server.shopex.io/login_form_submit.php',data,{withCredentials: true})
        .then(function (response) {
            
            if (response.data === 'welcome' ) {
                navigateRef.current('/Dashboard');
            }else if(response.data === 'invalid-credentials'){
                setflag(true);
                
            }else if(response === 'ppp'){
            
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

            <form onSubmit={loginSubmit} style={{marginLeft: '40%'}}>

                <Grid item sm={10} style={{display: 'grid'}}>

                    <h4>Sign In</h4>
                
                    <strong>Email</strong>
                    <input type="email" name="email" required placeholder = ""/>
                    
                    <strong>Password</strong>
                    <input type="password"  name="pcode" required />

                    <button type="submit">Submit</button>
                   
                   { flag && <h3> Invalid Credentials </h3> }
                
                </Grid>

            </form>

        </Grid>
    
    )
}

export default Login