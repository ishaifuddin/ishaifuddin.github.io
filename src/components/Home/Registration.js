import React, { useState,useRef } from "react";
import Grid from "@mui/material/Grid";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 


function Registration() {

    var[EmailCheck,setEmailCheck] = useState(false);
    
    const navigate = useNavigate(); 
    const navigateRef = useRef(navigate); 

    // useEffect(() => {  }, []); 

    var filterSubmit = (event) => {

        event.preventDefault();
        
        const fdata = new FormData(event.target);
        const data = Object.fromEntries(fdata.entries());

        axios.post('https://server.shopex.io/registration/reg_form_submit.php',data)
            .then(function (response) {
                if (response.data.res === 'taken' ) {
                    setEmailCheck(true);
                }else if(response.data.res === 'welcome'){
                    localStorage.setItem('soid', JSON.stringify(response.data.o));
                    navigateRef.current('/Reg_verify');
                }else if(response === 'ppp'){
                    // window.location.href="https://shopex.io/dash.php";
                }else if(response.data === 'Not'){
                    alert("No Invitetion Sent to you");
                }
            })
            .catch(function (error) {
              console.log(error);
        })
    
    };

    
    var check_http = (event) => {
        event.preventDefault();
        const fdata = new FormData(event.target);
        const data = Object.fromEntries(fdata.entries());
        axios.post('https://server.shopex.io/customers/cus_citylist.php', data, {withCredentials: true}); 
    };
        
        
    return (
        
        <Grid container>

            <form onSubmit={filterSubmit} style={{marginLeft: '40%'}}>
                
                <Grid item sm={10} style={{display: 'grid'}}>

                    <h4>Sign Up</h4>
                    {EmailCheck && <strong> Email Already exist </strong>}
                    <strong>Name</strong>
                    <input type="text" name="name" autoComplete='off' required placeholder = ""/>
                    
                    <strong>Email</strong>
                    <input type="email" name="email" autoComplete='off' required placeholder = ""/>
                    
                    <strong>Password</strong>
                    <input type="password"  name="pcode" autoComplete='off'  required />

                    <strong>Confirm-Password</strong>
                    <input type="password"  name="pcode"  autoComplete='off' required />
                   
                    <button type="submit">Submit</button>
                
                </Grid>

            </form>


            <form onSubmit={check_http} style={{marginLeft: '40%'}}>
                <Grid item sm={10} style={{display: 'grid'}}>
                    <button type="submit">Check HTTP Only Cookie</button>
                </Grid>
            </form>

        </Grid>
  )
}

export default Registration