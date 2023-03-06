import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Grid } from '@mantine/core';

function Last_Ordered_() {

    var [last_order_before, setlast_order_before] = useState(true);
    var [last_order_after, setlast_order_after] = useState(false);
    var [last_order_between, setlast_order_between] = useState(false);

    var handleChange = e => {

        setlast_order_between(false);
        setlast_order_after(false);
        setlast_order_before(false);

        if(e === 'last_order_between') setlast_order_between(true);
        if(e === 'last_order_before') setlast_order_before(true);
        if(e === 'last_order_after') setlast_order_after(true);
    }

    const options = [
        { value: 'last_order_before', label: 'Over' },
        { value: 'last_order_after', label: 'In the past' },
        { value: 'last_order_between', label: 'In-Between' },
    ];
      
    return (
        
        <>

            <Grid>

                <Grid.Col span={3} style={{display:'inline-flex'}}>
                    <strong style={{padding: '9px'}}> Last Purchase :  </strong>

                    <Select
                        placeholder="In the past"
                        defaultValue={'last_order_after'}
                        onChange={(e)=>{handleChange(e.value)}}
                        options={options}
                    />

                </Grid.Col>


                <Grid.Col span={8} >


                    { last_order_after && 

                        <>
                            <div style={{display:'inline-flex'}}>  
                            
                                <input type="number" id="lod_af" name="lod_itp" style={{marginTop:'7px'}} defaultValue="0" />   

                                <label>  day    
                                    <input style={{marginTop:'7px',display:'inline-flex'}} type="radio" name="loitp_unit" value="loitp_day"/> 
                                </label>  

                                <label>  month    
                                    <input style={{marginTop:'7px',display:'inline-flex'}} type="radio" name="loitp_unit" value="loitp_month"/> 
                                </label>  

                                <label>  year    
                                    <input style={{marginTop:'7px',display:'inline-flex'}} type="radio" name="loitp_unit" value="loitp_year"/>  
                                </label>  

                            </div>
                        </>
                    }

                    { last_order_before && 

                        <>
                            <div style={{display:'inline-flex'}}>  
                        
                                <input type="number"  id="lod_bif" name="lod_over" style={{marginTop:'7px'}} defaultValue="0" />   
                                
                                <label>  day  
                                    <input style={{marginTop:'7px',display:'inline-flex'}} type="radio" name="loo_unit" value="loo_day"/> 
                                </label>  


                                <label>  month  
                                    <input style={{marginTop:'7px',display:'inline-flex'}} type="radio" name="loo_unit" value="loo_month"/> 
                                </label>  


                                <label>  year    
                                    <input style={{marginTop:'7px',display:'inline-flex'}} type="radio" name="loo_unit" value="loo_year"/>  
                                </label> 

                                <strong style={{marginTop:'7px',display:'inline-flex'}}>Ago</strong> 
                            </div> 
                        </>
                    }

                    { last_order_between && 

                        <>
                            <div style={{display:'inline-flex'}}>  
                        
                                <input type="number"  id="lod_bitf" name="lod_from" style={{marginTop:'7px',display:'inline-flex'}} defaultValue="0"/>    
                                
                                <input type="number"  id="lod_bitt" name="lod_to" style={{marginTop:'7px',display:'inline-flex'}} defaultValue="0"/>  

                                <label style={{marginTop:'7px',display:'inline-flex'}}>Day<input style={{marginTop:'7px',display:'inline-flex'}} type="radio" name="lob_unit" value="lob_day"/></label>  
                                <label style={{marginTop:'7px',display:'inline-flex'}}>Month<input style={{marginTop:'7px',display:'inline-flex'}} type="radio" name="lob_unit" value="lob_month"/></label>  
                                <label style={{marginTop:'7px',display:'inline-flex'}}>Year<input style={{marginTop:'7px',display:'inline-flex'}} type="radio" name="lob_unit" value="lob_year"/></label>  

                                <strong>Ago</strong>  
                            </div> 
                        </>
                    }

                </Grid.Col> 

            </Grid>
        </>
    )
}

export default Last_Ordered_