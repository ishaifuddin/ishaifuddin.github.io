import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function First_Ordered_() {

    var [first_order_before, setfirst_order_before] = useState(true);
    var [first_order_after, setfirst_order_after] = useState(false);
    var [first_order_between, setfirst_order_between] = useState(false);

    var handleChange = e => {

        setfirst_order_between(false);
        setfirst_order_after(false);
        setfirst_order_before(false);

        if(e === 'first_order_between') setfirst_order_between(true);
        if(e === 'first_order_before') setfirst_order_before(true);
        if(e === 'first_order_after') setfirst_order_after(true);
    }

    const options = [
        { value: 'first_order_before', label: 'Over' },
        { value: 'first_order_after', label: 'In the past' },
        { value: 'first_order_between', label: 'In-Between' },
    ];
      
    return (
        
        <>

            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> First Purchase :  </strong>

                    <Select
                        placeholder="In the past"
                        defaultValue={'first_order_after'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />

                </Grid.Col>


                <Grid.Col span={8} >


                    { first_order_after && 

                        <>
                            <div style={{display:'inline-flex'}}>  
                            
                                <input style={{marginTop:'7px'}} type="number" id="fod_af" name="fod_itp" value="" />   

                                <label>  day    
                                    <input type="radio" name="foitp_unit" value="foitp_day"/> 
                                </label>  

                                <label>  month    
                                    <input type="radio" name="foitp_unit" value="foitp_month"/> 
                                </label>  

                                <label>  year    
                                    <input type="radio" name="foitp_unit" value="foitp_year"/>  
                                </label>  

                            </div>
                        </>
                    }

                    { first_order_before && 

                        <>
                            <div style={{display:'inline-flex'}}>  
                        
                                <input type="number"  id="fod_bif" name="fod_over" style={{marginTop:'7px'}} defaultValue="0" />   
                                
                                <label>  day  
                                    <input type="radio" name="foo_unit" value="foo_day"/> 
                                </label>  


                                <label>  month  
                                    <input type="radio" name="foo_unit" value="foo_month"/> 
                                </label>  


                                <label>  year    
                                    <input type="radio" name="foo_unit" value="foo_year"/>  
                                </label>  
                                <strong>Ago</strong> 
                            </div> 
                        </>
                    }

                    { first_order_between && 

                        <>
                            <div style={{display:'inline-flex'}}>  
                        
                                <input type="number" id="fod_bitf" name="fod_from" style={{marginTop:'7px',display:'inline-flex'}} defaultValue="0"/>To    
                                   
                                <input type="number"  id="fod_bitt" name="fod_to"  style={{marginTop:'7px',display:'inline-flex'}} defaultValue="0"/>  

                                <label>  day    
                                    <input type="radio" name="fob_unit" value="fob_day"/> 
                                </label>  

                                <label>  month    
                                    <input type="radio" name="fob_unit" value="fob_month"/> 
                                </label>  

                                <label>  year    
                                    <input type="radio" name="fob_unit" value="fob_year"/> 
                                </label>  
                                <strong>Ago</strong>  
                            </div> 
                        </>
                    }

                </Grid.Col> 

            </Grid>
        </>
    )
}

export default First_Ordered_