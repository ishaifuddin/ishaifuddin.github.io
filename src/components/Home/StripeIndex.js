import React, {  useState } from "react";
//import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
//import {useNavigate} from 'react-router-dom'; 
//import axios from 'axios';
import Button from '@mui/material/Button';
//import { useSelector, useDispatch } from "react-redux";

function Stripe_index() {

    //var dispatch = useDispatch();
        
    var[Pack1,setPack1] = useState(false);
    var[Pack2,setPack2] = useState(true);
    var[Pack3,setPack3] = useState(false);

    var[Pack1engage,setPack1engage] = useState(false);
    var[Pack2engage,setPack2engage] = useState(true);
    var[Pack3engage,setPack3engage] = useState(false);

    var soid = JSON.parse(localStorage.getItem('soid'));

    return (

        <>

            
            <Grid container style={{marginBottom:'3%',marginTop:'3%',marginLeft:'20%'}}>
                
                <h3>

                    Upto 
                    <Button onClick={(e) => { 
                        setPack1(true); 
                        setPack1engage(true); 
                        setPack2(false); 
                        setPack2engage(false); 
                        setPack3(false);
                        setPack3engage(false); }} 
                        color={Pack1 ? "primary" : "secondary"} >
                        <h5>100</h5>
                    </Button>
                    
                    <Button onClick={(e) => { 
                        setPack1(false); 
                        setPack1engage(false); 
                        setPack2(true); 
                        setPack2engage(true); 
                        setPack3(false);
                        setPack3engage(false); }} 
                        color={Pack2 ? "primary" : "secondary"} >
                        <h5>500</h5>
                    </Button>

                    <Button onClick={(e) => { 
                        setPack3(true); 
                        setPack3engage(true); 
                        setPack2(false); 
                        setPack2engage(false); 
                        setPack1(false);
                        setPack1engage(false); }} 
                        color={Pack3 ? "primary" : "secondary"} >
                        <h5>2500</h5>
                    </Button>
                    Orders Per-Month

                </h3>
                
            </Grid>


            <Grid container style={{marginLeft:'20%'}}>

                    
                <Grid item sm={3} style={{fontSize:'20px'}}>
                        
                    <p>  Historical Data </p>
                    <p>  Unlimited Team Members </p>
                    <p>  Advanced Reports</p>
                    <p>  Segmenting</p>
                    <p>  Cart Tracking </p>
                    <p>  Customer Journey Tracking </p>
                    <p>  Traffic data </p>
                    <p>  Dynamic product pricing</p>
                    
                    { Pack1 && <h4> $20 / month</h4>  }
                    { Pack2 && <h4> $50 / month</h4>  }
                    { Pack3 && <h4> $100 / month</h4> }
                
                </Grid>
                    
                <Grid item sm={3} style={{fontSize:'20px'}}>   

                    { Pack1 && <input type="checkbox" style={{ width: '25px', height: '25px' }} defaultChecked 
                        onClick={(e) => { 
                            setPack1engage(!Pack1engage); 
                        }} 
                    />}
            
                    { Pack2 && <input type="checkbox" style={{ width: '25px', height: '25px' }} defaultChecked 
                        onClick={(e) => { 
                            setPack2engage(!Pack2engage); 
                        }} 
                    />}
                    
                    { Pack3 &&<input type="checkbox" style={{ width: '25px', height: '25px' }} defaultChecked 
                        onClick={(e) => { 
                            setPack3engage(!Pack3engage); 
                        }} 
                    />}

                    <strong> Add-on : Mail-automation</strong>
                    <p>Send automated emails to Customer-Segments.</p>
                    <p>Send automated emails to Browse-abandoners.</p>
                    <p>Recover lost carts with Abandoned-Cart emails.</p>
                    
                    { Pack1 && <h4> $10 / month </h4>}
                    { Pack2 && <h4> $20 / month </h4>}
                    { Pack3 && <h4> $50 / month </h4>}

                </Grid>    
                        
            </Grid>

            <Grid container style={{  marginLeft:'20%',marginTop:'4%'}}>

                <Grid item sm={3} style={{boxShadow: '0 13px 8px 0 rgb(0 0 0 / 20%)', padding: '20px', border: '1px solid palevioletred' }}>
               
                    { Pack1 && !Pack1engage && 
                        
                        <Button> 
                            <a href={"https://server.shopex.io/stripe/stripe_checkout_1.php"}> 
                                Start with a 15-day trial - without engage [$20] 
                            </a>
                        </Button>  
                    }


                    { Pack1 && Pack1engage && 
                        
                        <Button> 
                            <a href={"https://server.shopex.io/stripe/stripe_checkout_2.php"}> 
                                Start with a 15-day trial - with engage [$30] 
                            </a>
                        </Button> 
                    }


                    { Pack2 && !Pack2engage && 
                        
                        <Button> 
                            <a href={"https://server.shopex.io/stripe/stripe_checkout_3.php"}> 
                                Start with a 15-day trial - without engage [$50] 
                            </a>
                        </Button>
                   }


                    { Pack2 && Pack2engage && 
                        <Button>
                            <a href={"https://server.shopex.io/stripe/stripe_checkout_4.php"}> 
                                Start with a 15-day trial - with engage [$75] 
                            </a>
                        </Button>
                    }


                    { Pack3 && !Pack3engage && 
                        <Button> 
                            <a href={"https://server.shopex.io/stripe/stripe_checkout_5.php"}> 
                                Start with a 15-day trial - without engage [$100]  
                            </a>
                        </Button>
                    }


                    { Pack3 && Pack3engage && 
                        
                        <Button>
                            <a href={"https://server.shopex.io/stripe/stripe_checkout_6.php"}> 
                                Start with a 15-day trial - with engage [$160] 
                            </a>
                        </Button>    
                    }

                </Grid>
            
            </Grid>

        </>
    )
}

export default Stripe_index