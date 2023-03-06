//import { ReactSession }  from 'react-client-session';

import React, {  useState,useRef } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import Radio from '@mui/material/Radio';
//import RadioGroup from '@mui/material/RadioGroup';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Pricing() {
    
    var[Pack1,setPack1] = useState(false);
    var[Pack2,setPack2] = useState(true);
    var[Pack3,setPack3] = useState(false);

    return (
        
        <>
           

            <Grid container style={{marginLeft:'28%',marginBottom:'3%'}}>
                
                <h3>
                    Upto 
                    <Button onClick={(e) => { 
                        setPack1(true); 
                        setPack2(false); 
                        setPack3(false) }} 
                        color={Pack1 ? "primary" : "secondary"} >
                        <h5>100</h5>
                    </Button>
                    
                    <Button onClick={(e) => { 
                        setPack1(false); 
                        setPack2(true); 
                        setPack3(false) }} 
                        color={Pack2 ? "primary" : "secondary"} >
                        <h5>500</h5>
                    </Button>

                    <Button onClick={(e) => { 
                        setPack3(true); 
                        setPack2(false); 
                        setPack1(false) }} 
                        color={Pack3 ? "primary" : "secondary"} >
                        <h5>2500</h5>
                    </Button>
                    Orders Per-Month
                </h3>
                
            </Grid>

            <Grid container style={{marginLeft:'28%'}}>
                
                <Grid item sm={3}>

                    {Pack1 &&  <h4  style={{color:'cornflowerblue'}}>$20<span >/month</span></h4> }
                    {Pack2 &&  <h4  style={{color:'cornflowerblue'}}>$50<span >/month</span></h4> }
                    {Pack3 &&  <h4  style={{color:'cornflowerblue'}}>$100<span >/month</span></h4> }

                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Historical Data</h6> 
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Manage multiple shop with same account</h6>
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Unlimited Team Members</h6>
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Advanced Reports</h6> 
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Segmenting</h6>
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Cart Tracking and Recovery</h6>
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Customer Journey Tracking</h6>
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Traffic data</h6>
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Dynamic product pricing</h6>
                
                </Grid>
                
                <Grid item sm={3}>

                    {Pack1 && <h4 style={{color:'cornflowerblue'}}> $10 <span >/month</span></h4> }
                    {Pack2 && <h4 style={{color:'cornflowerblue'}}> $20 <span >/month</span></h4> }
                    {Pack3 && <h4 style={{color:'cornflowerblue'}}> $50 <span >/month</span></h4> }

                    <strong> Add-on : Mail-automation</strong>
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/>Send automated emails to Customer-Segments</h6>
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/>Send emails to Browse-abandoners</h6>
                    <h6><DoubleArrowIcon style={{fontSize:'13px',color:'tomato'}}/> Recover lost carts with Abandoned-Cart emails.</h6>
                
                </Grid>

                <Grid item sm={7}>
                    <button style={{fontSize: '30px',color:'tomato',padding: '20px',background: 'none'}}> 
                        <strong style={{fontSize: '21px'}}>  Start with a 15-day trial </strong> 
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" 
                            focusable="false" aria-hidden="true" 
                            viewBox="0 0 24 14" data-testid="DoubleArrowIcon" style={{fontSize: '23px',color: 'tomato'}}>
                            <path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path>
                            <path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path>
                        </svg>   
                    </button> 
                </Grid>
                
            </Grid>
            
        </>
    ) 
}

export default Pricing